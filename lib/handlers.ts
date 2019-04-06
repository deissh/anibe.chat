import socketIo = require("socket.io");
import { UserManager } from "./userManager";

export class Handlers {
    public static Join(socket: socketIo.Socket) {
        return (id: string, cb: CallableFunction) => {
            const self = UserManager.getUserBySocket(socket);
            if (self) {
                self.socket.emit("join", { id, user: self.user });
            }
        };
    }

    public static Leave(socket: socketIo.Socket) {
        return (id: string, cb: CallableFunction) => {
            socket.emit("leave", { id });
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
            socket.emit("new_message", msg);
        };
    }

    public static Online(socket: socketIo.Socket) {
        return (arg: any): any => {
            const users = UserManager.getAvailableUsers();
            socket.emit("online", socket.rooms);
        };
    }
}
