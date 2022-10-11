import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BooksModule } from "./books/books.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./config";
import { join } from "path";
import { Book } from "./entity/book.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // setting for graphql
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
    }),
    // setting for typeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("database.host"),
        port: Number(configService.get("database.port")),
        username: configService.get("database.user"),
        password: configService.get("database.pass"),
        database: configService.get("database.name"),
        synchronize: true,
        // def entities
        entities: [Book],
        extra: {},
        logging: true,
        logger: "file",
      }),
      inject: [ConfigService],
    }),
    BooksModule,
  ],
})
export class AppModule {}
