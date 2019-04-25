[chat-server](../README.md) > ["chat-server"](../modules/_chat_server_.md) > [ChatServer](../classes/_chat_server_.chatserver.md)

# Class: ChatServer

## Hierarchy

**ChatServer**

## Index

### Constructors

* [constructor](_chat_server_.chatserver.md#constructor)

### Properties

* [app](_chat_server_.chatserver.md#app)
* [io](_chat_server_.chatserver.md#io)
* [port](_chat_server_.chatserver.md#port)
* [server](_chat_server_.chatserver.md#server)
* [PORT](_chat_server_.chatserver.md#port-1)

### Methods

* [auth](_chat_server_.chatserver.md#auth)
* [config](_chat_server_.chatserver.md#config)
* [createApp](_chat_server_.chatserver.md#createapp)
* [createServer](_chat_server_.chatserver.md#createserver)
* [getApp](_chat_server_.chatserver.md#getapp)
* [listen](_chat_server_.chatserver.md#listen)
* [sockets](_chat_server_.chatserver.md#sockets)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ChatServer**(): [ChatServer](_chat_server_.chatserver.md)

*Defined in [chat-server.ts:17](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L17)*

**Returns:** [ChatServer](_chat_server_.chatserver.md)

___

## Properties

<a id="app"></a>

### `<Private>` app

**● app**: *`express.Application`*

*Defined in [chat-server.ts:14](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L14)*

___
<a id="io"></a>

### `<Private>` io

**● io**: *`Server`*

*Defined in [chat-server.ts:16](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L16)*

___
<a id="port"></a>

### `<Private>` port

**● port**: *`string` \| `number`*

*Defined in [chat-server.ts:17](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L17)*

___
<a id="server"></a>

### `<Private>` server

**● server**: *`Server`*

*Defined in [chat-server.ts:15](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L15)*

___
<a id="port-1"></a>

### `<Static>` PORT

**● PORT**: *`number`* =  config.port

*Defined in [chat-server.ts:13](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L13)*

___

## Methods

<a id="auth"></a>

### `<Private>` auth

▸ **auth**(s: *`socketIo.Socket`*, next: *`function`*): `void`

*Defined in [chat-server.ts:83](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L83)*

Промежуточный обработчик для проверки и авторизации входящих соединений

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| s | `socketIo.Socket` |  Socket пользователя |
| next | `function` |  CallBack для передачи управления дальше |

**Returns:** `void`

___
<a id="config"></a>

### `<Private>` config

▸ **config**(): `void`

*Defined in [chat-server.ts:63](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L63)*

Конфигурирует приложение

**Returns:** `void`

___
<a id="createapp"></a>

### `<Private>` createApp

▸ **createApp**(): `void`

*Defined in [chat-server.ts:41](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L41)*

Создает приложение и настраивает мидлверес

**Returns:** `void`

___
<a id="createserver"></a>

### `<Private>` createServer

▸ **createServer**(): `void`

*Defined in [chat-server.ts:54](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L54)*

Создает сервер Express

**Returns:** `void`

___
<a id="getapp"></a>

###  getApp

▸ **getApp**(): `express.Application`

*Defined in [chat-server.ts:32](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L32)*

Получение Express приложения (его настроеный экземпляр)

**Returns:** `express.Application`

___
<a id="listen"></a>

### `<Private>` listen

▸ **listen**(): `void`

*Defined in [chat-server.ts:109](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L109)*

Устанавливает прослушивание событий и каналов

**Returns:** `void`

___
<a id="sockets"></a>

### `<Private>` sockets

▸ **sockets**(): `void`

*Defined in [chat-server.ts:72](https://github.com/deissh/anibe.chat/blob/c856951/src/chat-server.ts#L72)*

Настройка Socket.IO

**Returns:** `void`

___

