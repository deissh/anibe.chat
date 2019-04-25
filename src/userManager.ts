import socketIo from "socket.io";
import { IUser } from "./interfaces";

interface IUserData {
  socket: socketIo.Socket;
  user: IUser;
}

/**
 * @description Содержит всех пользователей и обертку над нимим
 */
export class UserManager {
  /**
   * Добавляет нового пользователя
   * @static
   * @param {socketIo.Socket} socket Socket пользователя
   * @param {IUser} user Содержит информацию о пользователя из JWT токена
   */
  public static addUser(socket: socketIo.Socket, user: IUser) {
    this.users.set(socket.id, { socket, user });
  }

  /**
   * Удаляет пользователя
   * @static
   * @param {socketIo.Socket} socket Socket пользователя
   * @param {IUser} user Содержит информацию о пользователя из JWT токена
   */
  public static removeUser(socket: socketIo.Socket) {
    this.users.delete(socket.id);
  }

  /**
   * Возвращяет список всех доступных пользователей
   * @static
   * @param {IUser} user Содержит информацию о пользователя из JWT токена
   * @returns {IUserData[]}
   */
  public static getAvailableUsers(): IUserData[] {
    return Array.from(this.users.values());
  }

  /**
   * Возвращяет true если пользователь находится в списке на основе его uuid
   * @static
   * @param {string} userid User uuid
   * @returns {boolean}
   */
  public static isUserAvailable(id: string): boolean {
    return this.getAvailableUsers().some((u: IUserData) => u.user.id === id);
  }

  /**
   * Возвращяет пользователя если он существует
   * @param {string} id user uuid
   * @returns {IUserData} Информация об подключении пользователя
   */
  public static getUserById(id: string): IUserData | undefined {
    return this.getAvailableUsers().find((u: IUserData) => u.user.id === id);
  }

  /**
   * Возвращяет пользователя по его Socket id
   * @param {socketIo.Socket} socket Socket
   * @returns {IUserData} Информация о подключении пользователя
   */
  public static getUserBySocket(
    socket: socketIo.Socket,
  ): IUserData | undefined {
    return this.getAvailableUsers().find(
      (u: IUserData) => u.socket.id === socket.id,
    );
  }

  /**
   * @description Содержит в себе всех пользователей
   * @type {Map<string, IUserData> = new Map()}
   */
  private static users: Map<string, IUserData> = new Map();
}
