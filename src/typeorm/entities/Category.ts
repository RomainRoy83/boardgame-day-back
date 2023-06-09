import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Game } from "./Game"

@Entity({ name: "category" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column("varchar", { nullable: false, unique: true, length: 255 })
  category_name: string

  @ManyToMany(() => Game, (game) => game.categories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  games?: Game[]
}
