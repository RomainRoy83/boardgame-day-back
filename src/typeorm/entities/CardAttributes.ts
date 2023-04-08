import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Game } from "./Game"

@Entity({ name: "card_attributes" })
export class CardAttributes {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column("varchar", { nullable: false, length: 7 })
  main_color: string

  @Column("varchar", { nullable: false, length: 7 })
  secondary_color: string

  @Column()
  gameId: number

  @OneToOne(() => Game, (game) => game.cardAttributes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  game: Game
}
