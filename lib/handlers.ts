import axios from "axios";
import socketIo = require("socket.io");
import config from "./config";
import { log } from "./logger";
import { UserManager } from "./userManager";

export class Handlers {
    public static Join(socket: socketIo.Socket) {
        return (id: string, cb: CallableFunction) => {
            const self = UserManager.getUserBySocket(socket);
            if (self) {
                socket.join(id);
                socket.to(id).emit("join", { id, user: self.user });
            }
        };
    }

    public static Leave(socket: socketIo.Socket) {
        return (id: string, cb: CallableFunction) => {
            socket.to(id).emit("leave", { id });
        };
    }

    public static Message(socket: socketIo.Socket) {
        return (msg: {
            chat_id: string,
            body: string,
            attachments: {
              images: string[],
              links: string[],
              videos: string[],
              sticker: string,
            },
        }) => {
            axios.post(config.api + `/messages/${msg.chat_id}`, {
                body: msg.body,
                attachments: msg.attachments,
            }, {
                headers: {
                    Authorization: "Bearer " + socket.handshake.query.token,
                },
            })
                .then((res: any) => {
                    log.info(res.data);
                    socket.emit("new_message", res.data);
                })
                .catch((e) => log.error(e));
        };
    }

    public static Online(socket: socketIo.Socket) {
        return (arg: any): any => {
            const users = UserManager.getAvailableUsers();
            socket.emit("online", users.length);
        };
    }
}
