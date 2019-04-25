[chat-server](../README.md) > ["userManager"](../modules/_usermanager_.md) > [UserManager](../classes/_usermanager_.usermanager.md)

# Class: UserManager

*__description__*: Содержит всех пользователей и обертку над нимим

## Hierarchy

**UserManager**

## Index

### Properties

* [users](_usermanager_.usermanager.md#users)

### Methods

* [addUser](_usermanager_.usermanager.md#adduser)
* [getAvailableUsers](_usermanager_.usermanager.md#getavailableusers)
* [getUserById](_usermanager_.usermanager.md#getuserbyid)
* [getUserBySocket](_usermanager_.usermanager.md#getuserbysocket)
* [isUserAvailable](_usermanager_.usermanager.md#isuseravailable)
* [removeUser](_usermanager_.usermanager.md#removeuser)

---

## Properties

<a id="users"></a>

### `<Static>``<Private>` users

**● users**: *`Map`<`string`, [IUserData](../interfaces/_usermanager_.iuserdata.md)>* =  new Map()

*Defined in [userManager.ts:79](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L79)*

*__description__*: Содержит в себе всех пользователей

*__type__*: {Map<string, IUserData> = new Map()}

___

## Methods

<a id="adduser"></a>

### `<Static>` addUser

▸ **addUser**(socket: *`socketIo.Socket`*, user: *[IUser](../interfaces/_interfaces_.iuser.md)*): `void`

*Defined in [userManager.ts:19](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L19)*

Добавляет нового пользователя

*__static__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket пользователя |
| user | [IUser](../interfaces/_interfaces_.iuser.md) |  Содержит информацию о пользователя из JWT токена |

**Returns:** `void`

___
<a id="getavailableusers"></a>

### `<Static>` getAvailableUsers

▸ **getAvailableUsers**(): [IUserData](../interfaces/_usermanager_.iuserdata.md)[]

*Defined in [userManager.ts:39](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L39)*

Возвращяет список всех доступных пользователей

*__static__*: 

**Returns:** [IUserData](../interfaces/_usermanager_.iuserdata.md)[]

___
<a id="getuserbyid"></a>

### `<Static>` getUserById

▸ **getUserById**(id: *`string`*): [IUserData](../interfaces/_usermanager_.iuserdata.md) \| `undefined`

*Defined in [userManager.ts:58](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L58)*

Возвращяет пользователя если он существует

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  user uuid |

**Returns:** [IUserData](../interfaces/_usermanager_.iuserdata.md) \| `undefined`
Информация об подключении пользователя

___
<a id="getuserbysocket"></a>

### `<Static>` getUserBySocket

▸ **getUserBySocket**(socket: *`socketIo.Socket`*): [IUserData](../interfaces/_usermanager_.iuserdata.md) \| `undefined`

*Defined in [userManager.ts:67](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L67)*

Возвращяет пользователя по его Socket id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket |

**Returns:** [IUserData](../interfaces/_usermanager_.iuserdata.md) \| `undefined`
Информация о подключении пользователя

___
<a id="isuseravailable"></a>

### `<Static>` isUserAvailable

▸ **isUserAvailable**(id: *`string`*): `boolean`

*Defined in [userManager.ts:49](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L49)*

Возвращяет true если пользователь находится в списке на основе его uuid

*__static__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `boolean`

___
<a id="removeuser"></a>

### `<Static>` removeUser

▸ **removeUser**(socket: *`socketIo.Socket`*): `void`

*Defined in [userManager.ts:29](https://github.com/deissh/anibe.chat/blob/c856951/src/userManager.ts#L29)*

Удаляет пользователя

*__static__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| socket | `socketIo.Socket` |  Socket пользователя |

**Returns:** `void`

___

