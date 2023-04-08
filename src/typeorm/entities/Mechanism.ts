import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Game } from "./Game"

@Entity({ name: "mechanism" })
export class Mechanism {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column("varchar", { nullable: false, unique: true, length: 255 })
  mechanism_name: string

  @ManyToMany(() => Game, (game) => game.mechanisms, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  games?: Game[]
}
