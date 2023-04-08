import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm"
import { Game } from "./Game"
import { Mechanism } from "./Mechanism"

@Entity("game_has_mechanism")
export class GameHasMechanism {
  @PrimaryColumn({ name: "game_id" })
  gameId: number

  @PrimaryColumn({ name: "mechanism_id" })
  mechanismId: number

  @ManyToOne(() => Game, (game) => game.mechanisms, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "game_id", referencedColumnName: "id" }])
  game: Game[]

  @ManyToOne(() => Mechanism, (mechanism) => mechanism.games, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "mechanism_id", referencedColumnName: "id" }])
  mechanism: Mechanism[]
}
