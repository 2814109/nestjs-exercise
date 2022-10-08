import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BooksModule } from "./books/books.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    BooksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("database.host"),
        port: Number(configService.get("database.port")),
        username: configService.get("database.user"),
        password: configService.get("database.pass"),
        database: configService.get("database.name"),
        extra: {},
      }),
      inject: [ConfigService],
    }),

    // TypeOrmModule.forRoot({
    //   keepConnectionAlive: true,
    //   type: "postgres",
    //   host: process.env.POSTGRES_URI,
    //   port: Number(process.env.POSTGRES_PORT),
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DB,
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
  ],
})
export class AppModule {}
