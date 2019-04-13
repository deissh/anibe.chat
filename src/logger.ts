import winston from 'winston';
import config from './config';

export const log = winston.createLogger({
  level: config.logLevel,
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'combined.log',
    }),
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize()),
    }),
  ],
});
