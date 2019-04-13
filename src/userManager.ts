import socketIo from "socket.io";
import { IUser } from "./interfaces";

interface IUserData {
    socket: socketIo.Socket;
    user: IUser;
}

/**
 * @description Contain all active users
 */
export class UserManager {
    /**
     * Add new user connection with user info
     * @param {socketIo.Socket} socket Socket.io object
     * @param {IUser} user Contain user data from jwt
     */
    public static addUser(socket: socketIo.Socket, user: IUser) {
        this.users.set(socket.id, { socket, user });
    }

    /**
     * Remove user from avalible
     * @param {socketIo.Socket} socket Socket.io object
     */
    public static removeUser(socket: socketIo.Socket) {
        this.users.delete(socket.id);
    }

    /**
     * Return all avalible users
     * @returns {IUserData[]} Users connection info
     */
    public static getAvailableUsers(): IUserData[] {
        return Array.from(this.users.values());
    }

    /**
     * Return true if user already added
     * @param {string} userid User uuid
     * @returns {boolean} Status
     */
    public static isUserAvailable(id: string): boolean {
        return this.getAvailableUsers().some((u: IUserData) => u.user.id === id);
    }

    /**
     * Return user if exist
     * @param {string} id user uuid
     * @returns {IUserData} User connection info
     */
    public static getUserById(id: string): IUserData | undefined {
        return this.getAvailableUsers().find((u: IUserData) => u.user.id === id);
    }

    /**
     * Return user by her socket id
     * @param {socketIo.Socket} socket Socket.IO connection
     * @returns {IUserData} User connection info
     */
    public static getUserBySocket(socket: socketIo.Socket): IUserData | undefined {
        return this.getAvailableUsers().find((u: IUserData) => u.socket.id === socket.id);
    }

    /**
     * @description contain users objects by their connection id
     */
    private static users: Map<string, IUserData> = new Map();
}
