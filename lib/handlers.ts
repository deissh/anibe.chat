import socketIo = require("socket.io");

export class Handlers {
    public static Join(socket: socketIo.Socket) {
        return (chatroomName: string, cb: CallableFunction) => {
            socket.emit("join", chatroomName, cb);
        };
    }

    public static Leave(socket: socketIo.Socket) {
        return (chatroomName: string, cb: CallableFunction) => {
            socket.emit("leave", chatroomName, cb);
        };
    }

    public static Message(socket: socketIo.Socket) {
        return (arg: any) => {
            return;
        };
    }

    public static GetAvailableUsers(socket: socketIo.Socket) {
        return (arg: any): void => {
            return;
        };
    }
}
