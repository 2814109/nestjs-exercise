import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "../config";

const option: DataSourceOptions = {
  type: "postgres",
  host: config.host,
  port: Number(config.port),
  username: config.user,
  password: config.pass,
  database: config.name,
  synchronize: true,
  migrations: ["src/migration/**/*.ts"],
  extra: {},
  logging: true,
  logger: "file",
};

const dataSource = new DataSource(option);

export default dataSource;
