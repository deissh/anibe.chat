[chat-server](../README.md) > ["handlers"](../modules/_handlers_.md) > [Handlers](../classes/_handlers_.handlers.md)

# Class: Handlers

## Hierarchy

**Handlers**

## Index

### Methods

* [Join](_handlers_.handlers.md#join)
* [Leave](_handlers_.handlers.md#leave)
* [Message](_handlers_.handlers.md#message)
* [Online](_handlers_.handlers.md#online)

---

## Methods

<a id="join"></a>

### `<Static>` Join

▸ **Join**(socket: *`socketIo.Socket`*): `function`

*Defined in [handlers.ts:15](https://github.com/deissh/anibe.chat/blob/c856951/src/handlers.ts#L15)*

Обрабатывает подключение новых пользователей

*__static__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket пользователя |

**Returns:** `function`

___
<a id="leave"></a>

### `<Static>` Leave

▸ **Leave**(socket: *`socketIo.Socket`*): `function`

*Defined in [handlers.ts:31](https://github.com/deissh/anibe.chat/blob/c856951/src/handlers.ts#L31)*

Обрабатывает отключение пользователей

*__static__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket пользователя |

**Returns:** `function`

___
<a id="message"></a>

### `<Static>` Message

▸ **Message**(socket: *`socketIo.Socket`*): `function`

*Defined in [handlers.ts:43](https://github.com/deissh/anibe.chat/blob/c856951/src/handlers.ts#L43)*

Обрабатывает все отправленые сообщения

*__static__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket пользователя |

**Returns:** `function`

___
<a id="online"></a>

### `<Static>` Online

▸ **Online**(socket: *`socketIo.Socket`*): `(Anonymous function)`

*Defined in [handlers.ts:81](https://github.com/deissh/anibe.chat/blob/c856951/src/handlers.ts#L81)*

Обрабатывает запрос на получение кол-во пользователй в сети

*__static__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket пользователя |

**Returns:** `(Anonymous function)`

___

