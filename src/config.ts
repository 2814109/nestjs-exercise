type ConfigKey = "host" | "port" | "user" | "pass" | "name";

type ConfigType = { [key in ConfigKey]: string };

export const config: ConfigType = {
  host: process.env.POSTGERS_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  pass: process.env.POSTGRES_PASSWORD,
  name: process.env.POSTGRES_DB,
};
