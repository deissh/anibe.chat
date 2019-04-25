[chat-server](../README.md) > ["config"](../modules/_config_.md)

# External module: "config"

## Index

### Functions

* [requireProcessEnv](_config_.md#requireprocessenv)

### Object literals

* [config](_config_.md#config)

---

## Functions

<a id="requireprocessenv"></a>

### `<Const>` requireProcessEnv

▸ **requireProcessEnv**(name: *`string`*): `undefined` \| `string`

*Defined in [config.ts:10](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L10)*

Срабатывает исключение если нету в переменных окружения переданой переменной

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Название переменной окружения |

**Returns:** `undefined` \| `string`

___

## Object literals

<a id="config"></a>

### `<Const>` config

**config**: *`object`*

*Defined in [config.ts:22](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L22)*

<a id="config.test"></a>

####  test

**● test**: *`object`*

*Defined in [config.ts:32](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L32)*

#### Type declaration

___
<a id="config.all"></a>

####  all

**all**: *`object`*

*Defined in [config.ts:23](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L23)*

<a id="config.all.api"></a>

####  api

**● api**: *`undefined` \| `string`* =  requireProcessEnv("API_HOST")

*Defined in [config.ts:28](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L28)*

___
<a id="config.all.env"></a>

####  env

**● env**: *`string`* =  process.env.NODE_ENV || "development"

*Defined in [config.ts:24](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L24)*

___
<a id="config.all.host"></a>

####  host

**● host**: *`string`* =  process.env.SERVER_HOST || "0.0.0.0"

*Defined in [config.ts:27](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L27)*

___
<a id="config.all.jwtsecret"></a>

####  jwtSecret

**● jwtSecret**: *`undefined` \| `string`* =  requireProcessEnv("JWT_SECRET")

*Defined in [config.ts:30](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L30)*

___
<a id="config.all.loglevel"></a>

####  logLevel

**● logLevel**: *`string`* =  process.env.SERVER_LOG_LEVEL || "info"

*Defined in [config.ts:25](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L25)*

___
<a id="config.all.masterkey"></a>

####  masterKey

**● masterKey**: *`undefined` \| `string`* =  requireProcessEnv("MASTER_KEY")

*Defined in [config.ts:29](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L29)*

___
<a id="config.all.port"></a>

####  port

**● port**: *`string` \| `number`* =  process.env.SERVER_PORT || 2300

*Defined in [config.ts:26](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L26)*

___

___
<a id="config.development"></a>

####  development

**development**: *`object`*

*Defined in [config.ts:33](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L33)*

<a id="config.development.log"></a>

####  log

**● log**: *`string`* = "debug"

*Defined in [config.ts:34](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L34)*

___

___
<a id="config.production"></a>

####  production

**production**: *`object`*

*Defined in [config.ts:36](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L36)*

<a id="config.production.ip"></a>

####  ip

**● ip**: *`string`* =  process.env.IP || "127.0.0.1"

*Defined in [config.ts:37](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L37)*

___
<a id="config.production.port-1"></a>

####  port

**● port**: *`string` \| `number`* =  process.env.PORT || 3000

*Defined in [config.ts:38](https://github.com/deissh/anibe.chat/blob/c856951/src/config.ts#L38)*

___

___

___

