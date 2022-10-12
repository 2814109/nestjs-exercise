import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class Essay {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  // related book id , book has many essay
  @Column()
  @Field()
  bookId: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  subTitle: string;

  @Column()
  @Field()
  contents: string;

  // if draft then the column is false
  @Column()
  @Field()
  isPublished: boolean;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
