import { Module } from "@nestjs/common"
import { GameController } from "./controllers/game/game.controller"
import { GameService } from "./services/game/game.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Game } from "../typeorm/entities/Game"
import { Category } from "../typeorm/entities/Category"
import { CardAttributes } from "../typeorm/entities/CardAttributes"

@Module({
  imports: [TypeOrmModule.forFeature([Game, Category, CardAttributes])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
