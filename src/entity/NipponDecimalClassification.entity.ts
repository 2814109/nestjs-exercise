import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
export class NipponDecimalClassification {
  @PrimaryColumn()
  @Field()
  id: number;

  // 類目表　１桁
  @Column()
  @Field()
  classifiedTable: string;

  // 形式区分　２桁
  @Column()
  @Field()
  formalDistinction: string;

  // 綱目表 ３桁
  @Column()
  @Field()
  tableOfContents: string;
}
