import dotenv from "dotenv-safe";
import merge from "lodash/merge";
import path from "path";
import { log } from "./logger";

const requireProcessEnv = (name: string) => {
  if (!process.env[name]) {
    throw new Error("You must set the " + name + " environment variable");
  }
  return process.env[name];
};

dotenv.load({
  path: path.join(__dirname, "../.env"),
  sample: path.join(__dirname, "../.env.example"),
});

const config: any = {
  all: {
    env: process.env.NODE_ENV || "development",
    logLevel: process.env.SERVER_LOG_LEVEL || "info",
    port: process.env.SERVER_PORT || 2300,
    host: process.env.SERVER_HOST || "0.0.0.0",
    api: requireProcessEnv("API_HOST"),
    masterKey: requireProcessEnv("MASTER_KEY"),
    jwtSecret: requireProcessEnv("JWT_SECRET"),
  },
  test: {},
  development: {
    log: "debug",
  },
  production: {
    ip: process.env.IP || "127.0.0.1",
    port: process.env.PORT || 3000,
  },
};

module.exports = merge(config.all, config[config.all.env]);
export default module.exports;
