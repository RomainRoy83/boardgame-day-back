import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToOne,
} from "typeorm"
import { Category } from "./Category"
import { Mechanism } from "./Mechanism"
import { CardAttributes } from "./CardAttributes"

@Entity({ name: "game" })
export class Game {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column("varchar", { unique: true, nullable: false, length: 255 })
  game_name: string

  @Column("varchar", { unique: true, nullable: true, length: 255 })
  cover: string

  @Column("varchar", { unique: true, nullable: true, length: 255 })
  rules: string

  @Column("int", { nullable: true })
  votes: number

  @Column("float", { nullable: true })
  weight: number

  @ManyToMany(() => Category, (category) => category.games, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
  })
  @JoinTable({
    name: "game_has_category",
    joinColumn: {
      name: "category_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "game_id",
      referencedColumnName: "id",
    },
  })
  categories?: Category[]

  @ManyToMany(() => Mechanism, (mechanism) => mechanism.games, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinTable({
    name: "game_has_mechanism",
    joinColumn: {
      name: "mechanism_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "game_id",
      referencedColumnName: "id",
    },
  })
  mechanisms?: Mechanism[]

  @OneToOne(() => CardAttributes, (cardAttributes) => cardAttributes.game, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  cardAttributes: CardAttributes
}
