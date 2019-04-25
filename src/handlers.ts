import socketIo = require("socket.io");
import { ChatApi } from "./api";
import config from "./config";
import { IUser } from "./interfaces";
import { log } from "./logger";
import { UserManager } from "./userManager";

export class Handlers {
  /**
   * Обрабатывает подключение новых пользователей
   * @static
   * @param {socketIo.Socket} socket Socket пользователя
   * @returns {(...args: any[]) => void}
   */
  public static Join(socket: socketIo.Socket): (...args: any[]) => void {
    return (id: string, cb: (...args: any[]) => void) => {
      const self = UserManager.getUserBySocket(socket);
      if (self) {
        socket.join(id);
        socket.to(id).emit("join", { id, user: self.user });
      }
    };
  }

  /**
   * Обрабатывает отключение пользователей
   * @static
   * @param {socketIo.Socket} socket Socket пользователя
   * @returns {(...args: any[]) => void}
   */
  public static Leave(socket: socketIo.Socket): (...args: any[]) => void {
    return (id: string, cb: (...args: any[]) => void) => {
      socket.to(id).emit("leave", { id });
    };
  }

  /**
   * Обрабатывает все отправленые сообщения
   * @static
   * @param {socketIo.Socket} socket Socket пользователя
   * @returns {(...args: any[]) => void}
   */
  public static Message(socket: socketIo.Socket): (...args: any[]) => void {
    return async (msg: {
      chat_id: string;
      body: string;
      attachments: {
        images: string[];
        links: string[];
        videos: string[];
        sticker: string;
      };
    }) => {
      // получаем токен из пользователя
      const token = socket.handshake.query.token;
      // проверяем что токен валидный + запрашиваем информацию по чату в который нужно отправить сообщение
      const chatinfo = await ChatApi.get(token, msg.chat_id);

      // отправляем сообщение
      const res = await ChatApi.createMessage(token, msg);
      log.debug(res);

      // информируем каждого пользователя в чате (только тех кто в подключен)
      chatinfo.users.forEach(async (uid: string) => {
        const data = UserManager.getUserById(uid);
        // если не нашли пользователя который сейчас активен в чате
        if (!data) {
          return;
        }
        data.socket.emit("new_message", res);
      });
    };
  }

  /**
   * Обрабатывает запрос на получение кол-во пользователй в сети
   * @static
   * @param {socketIo.Socket} socket Socket пользователя
   * @returns {(...args: any[]) => void}
   */
  public static Online(socket: socketIo.Socket) {
    return (arg: any): any => {
      const users = UserManager.getAvailableUsers();
      socket.emit("online", users.length);
    };
  }
}
