import cors from "cors";
import express from "express";
import { createServer, Server } from "http";
import jwt from "jsonwebtoken";
import socketIo from "socket.io";
import config from "./config";
import { Handlers } from "./handlers";
import { IUser } from "./interfaces";
import { log } from "./logger";
import { UserManager } from "./userManager";

export class ChatServer {
  public static readonly PORT: number = config.port;
  private app!: express.Application;
  private server!: Server;
  private io!: SocketIO.Server;
  private port!: string | number;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  public getApp(): express.Application {
    return this.app;
  }

  private createApp(): void {
    this.app = express();
    this.app.use(cors({
      origin: '*:*',
      credentials: true,
    }));
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private config(): void {
    this.port = process.env.PORT || ChatServer.PORT;
  }

  private sockets(): void {
    this.io = socketIo(this.server);
  }

  private auth(s: socketIo.Socket, next: (err?: any) => void): void {
    if (s.handshake.query && s.handshake.query.token) {
      jwt.verify(
        s.handshake.query.token,
        config.jwtSecret,
        (err: Error, decoded: any) => {
          if (err) {
            log.error(err.message, { socketid: s.id });
            return next(new Error("Authentication error"));
          }

          log.info("connected user", { socketid: s.id, user: decoded });
          UserManager.addUser(s, decoded);
          next();
        },
      );
    } else {
      next(new Error("Authentication error"));
    }
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      log.info("Running server on port " + this.port);
    });

    this.io.use(this.auth);

    this.io.on("connect", (socket: socketIo.Socket) => {
      socket.on("disconnect", () => {
        log.info("Client disconnected");
        UserManager.removeUser(socket);
      });

      socket.on("join", Handlers.Join(socket));
      socket.on("leave", Handlers.Leave(socket));
      socket.on("new_message", Handlers.Message(socket));
      socket.on("online", Handlers.Online(socket));

      socket.on("error", (err) => {
        log.error(err);
      });
    });
  }
}
