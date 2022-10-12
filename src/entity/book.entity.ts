import { Field, ID, ObjectType, Int } from "@nestjs/graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
@ObjectType({ description: "book" })
export class Book {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: "30" })
  @Field()
  title: string;

  @Column()
  @Field((type) => String)
  author: string;

  @Column({ type: "int", unsigned: true })
  @Field((type) => Int)
  price: number;

  @Column({ default: false })
  @Field((type) => Boolean)
  isArchive: boolean;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
