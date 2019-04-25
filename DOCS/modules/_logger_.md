[chat-server](../README.md) > ["logger"](../modules/_logger_.md)

# External module: "logger"

## Index

### Variables

* [log](_logger_.md#log)

---

## Variables

<a id="log"></a>

### `<Const>` log

**● log**: *`Logger`* =  winston.createLogger({
  level: config.logLevel,
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "combined.log",
    }),
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize()),
    }),
  ],
})

*Defined in [logger.ts:8](https://github.com/deissh/anibe.chat/blob/c856951/src/logger.ts#L8)*

Создает новый логгер и настраивает его

*__returns__*: 

___

