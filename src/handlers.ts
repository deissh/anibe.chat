import axios from 'axios';
import socketIo = require('socket.io');
import { ChatApi } from './api';
import config from './config';
import { IUser } from './interfaces';
import { log } from './logger';
import { UserManager } from './userManager';

export class Handlers {
  public static Join(socket: socketIo.Socket) {
    return (id: string, cb: CallableFunction) => {
      const self = UserManager.getUserBySocket(socket);
      if (self) {
        socket.join(id);
        socket.to(id).emit('join', { id, user: self.user });
      }
    };
  }

  public static Leave(socket: socketIo.Socket) {
    return (id: string, cb: CallableFunction) => {
      socket.to(id).emit('leave', { id });
    };
  }

  public static Message(socket: socketIo.Socket) {
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
      const token = socket.handshake.query.token;
      const chatinfo = await ChatApi.get(token, msg.chat_id);

      const res = await ChatApi.createMessage(token, msg);
      log.debug(res);

      chatinfo.users.forEach(async (uid: string) => {
        const data = UserManager.getUserById(uid);
        // если не нашли пользователя который сейчас активен в чате
        if (!data) {
          return;
        }
        data.socket.emit('new_message', res);
      });
    };
  }

  public static Online(socket: socketIo.Socket) {
    return (arg: any): any => {
      const users = UserManager.getAvailableUsers();
      socket.emit('online', users.length);
    };
  }
}
