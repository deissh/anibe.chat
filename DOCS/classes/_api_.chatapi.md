[chat-server](../README.md) > ["api"](../modules/_api_.md) > [ChatApi](../classes/_api_.chatapi.md)

# Class: ChatApi

## Hierarchy

**ChatApi**

## Index

### Methods

* [createMessage](_api_.chatapi.md#createmessage)
* [get](_api_.chatapi.md#get)
* [getAll](_api_.chatapi.md#getall)
* [getMessages](_api_.chatapi.md#getmessages)

---

## Methods

<a id="createmessage"></a>

### `<Static>` createMessage

▸ **createMessage**(token: *`string`*, data: *`object`*): `Promise`<`any`>

*Defined in [api.ts:51](https://github.com/deissh/anibe.chat/blob/c856951/src/api.ts#L51)*

Отправляет сообщение в чат

**Parameters:**

**token: `string`**

**data: `object`**

| Name | Type |
| ------ | ------ |
| attachments | `object` |
| body | `string` |
| chat_id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="get"></a>

### `<Static>` get

▸ **get**(token: *`string`*, id: *`string`*): `Promise`<[IChat](../interfaces/_interfaces_.ichat.md)>

*Defined in [api.ts:13](https://github.com/deissh/anibe.chat/blob/c856951/src/api.ts#L13)*

Получить чат по его айди

*__async__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  user jwt token |
| id | `string` |  uuid чата |

**Returns:** `Promise`<[IChat](../interfaces/_interfaces_.ichat.md)>
результат

___
<a id="getall"></a>

### `<Static>` getAll

▸ **getAll**(token: *`string`*, query?: *`undefined` \| `string`*): `Promise`<[IChat](../interfaces/_interfaces_.ichat.md)[]>

*Defined in [api.ts:30](https://github.com/deissh/anibe.chat/blob/c856951/src/api.ts#L30)*

Получение всех активных чатов для пользователя

*__async__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |
| `Optional` query | `undefined` \| `string` |  Название чата, может быть null |

**Returns:** `Promise`<[IChat](../interfaces/_interfaces_.ichat.md)[]>

___
<a id="getmessages"></a>

### `<Static>` getMessages

▸ **getMessages**(token: *`string`*, id: *`string`*, page?: *`number`*): `Promise`<[IMessage](../interfaces/_interfaces_.imessage.md)[]>

*Defined in [api.ts:77](https://github.com/deissh/anibe.chat/blob/c856951/src/api.ts#L77)*

Получение сообщений с паджинацией

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| token | `string` | - |
| id | `string` | - |  uuid чата |
| `Default value` page | `number` | 1 |

**Returns:** `Promise`<[IMessage](../interfaces/_interfaces_.imessage.md)[]>

___

