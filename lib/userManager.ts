import socketIo = require("socket.io");
import { IUser } from "./interfaces";

interface IUserData {
    socket: socketIo.Socket;
    user: IUser;
}
interface IUsersMap<K extends object, V> {
    values(): Iterable<V> | ArrayLike<V>;
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
}

/**
 * @description Contain all active users
 */
export class UserManager {
    /**
     * @description contain users objects by their connection id
     */
    // tslint:disable-next-line: ban-types
    private users!: IUsersMap<Object, IUserData>;

    /**
     * Add new user connection with user info
     * @param {socketIo.Socket} socket Socket.io object
     * @param {IUser} user Contain user data from jwt
     */
    public addUser(socket: socketIo.Socket, user: IUser) {
        this.users.set(socket.id, { socket, user });
    }

    /**
     * Remove user from avalible
     * @param {socketIo.Socket} socket Socket.io object
     */
    public removeUser(socket: socketIo.Socket) {
        this.users.delete(socket.id);
    }

    /**
     * Return all avalible users
     * @returns {IUserData[]} Users connection info
     */
    public getAvailableUsers(): IUserData[] {
        return Array.from(this.users.values());
    }

    /**
     * Return true if user already added
     * @param {string} userid User uuid
     * @returns {boolean} Status
     */
    public isUserAvailable(id: string): boolean {
        return this.getAvailableUsers().some((u: IUserData) => u.user.id === id);
    }

    /**
     * Return user if exist
     * @param {string} id user uuid
     * @returns {IUserData} User connection info
     */
    public getUserById(id: string): IUserData | undefined {
        return this.getAvailableUsers().find((u: IUserData) => u.user.id === id);
    }

    /**
     * Return user by her socket id
     * @param {string} socketid Socket.IO connection id
     * @returns {IUserData} User connection info
     */
    public getUserBySocketId(socketid: string): IUserData | undefined {
        return this.getAvailableUsers().find((u: IUserData) => u.socket.id === socketid);
    }
}
