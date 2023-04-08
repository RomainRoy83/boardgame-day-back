import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm"
import { Game } from "./Game"
import { Category } from "./Category"

@Entity({ name: "game_has_category" })
export class GameHasCategory {
  @PrimaryColumn({ name: "game_id" })
  gameId: number

  @PrimaryColumn({ name: "category_id" })
  categoryId: number

  @ManyToOne(() => Game, (game) => game.categories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "game_id", referencedColumnName: "id" }])
  games: Game[]

  @ManyToOne(() => Category, (category) => category.games, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  categories: Category[]
}
