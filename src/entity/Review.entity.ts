import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class Review {
  @PrimaryColumn()
  @Field(ID)
  id: number;

  @Column()
  @Field(() => Int)
  star: number;

  @Column()
  @Field(() => String)
  comment: string;

  // related user
  @Column()
  @Field(() => Int)
  userId: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
