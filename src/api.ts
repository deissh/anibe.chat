import axios from "axios";
import config from "./config";
import { IChat, IMessage } from "./interfaces";

export class ChatApi {
  /**
   * Получить чат по его айди
   * @async
   * @param {string} token user jwt token
   * @param {string} id uuid чата
   * @returns {Promise<IChat>} результат
   */
  public static async get(token: string, id: string): Promise < IChat > {
    const url = config.api + `/chats/${id}`;

    const res = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  }

  /**
   * Получение всех активных чатов для пользователя
   * @async
   * @param {string} query Название чата, может быть null
   * @returns {Promise<IChat[]>}
   */
  public static async getAll(token: string, query ?: string): Promise < IChat[] > {
    let url = config.api + `/chats`;
    if (query) {
      url += `?q=${query}`;
    }

    const res = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return res.data.rows;
  }

  /**
   * Отправляет сообщение в чат
   * @param chat_id uuid чата
   * @param body сообщение
   * @param attachments прикрепления к сообщению
   */
  public static async createMessage(
    token: string,
    data: {
      chat_id: string,
      body: string,
      attachments: {
        images: string[],
        links: string[],
        videos: string[],
        sticker: string,
      },
    },
  ): Promise < any > {
    const url = config.api + `/messages/${data.chat_id}`;
    const res = await axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  }

  /**
   * Получение сообщений с паджинацией
   * @param {string} id uuid чата
   */
  public static async getMessages(token: string, id: string, page: number = 1): Promise < IMessage[] > {
    const url = config.api + `/messages/${id}?page=${page}`;
    const res = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return res.data.rows;
  }
}
