import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common"
import { CreateGameDto } from "../../dtos/CreateGame.dto"
import { GameService } from "../../services/game/game.service"
import { UpdateGameDto } from "../../dtos/UpdateGame.dto"

@Controller("game")
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  getAllGames() {
    return this.gameService.findAllGames()
  }

  @Get(":id")
  getOneGame(@Param("id", ParseIntPipe) id: number) {
    return this.gameService.findGameById(id)
  }

  @Post()
  async createGame(
    @Body() createGameDto: CreateGameDto
  ) {
    await this.gameService.createGame(createGameDto)
  }

  @Put(":id")
  async updateGameById(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    await this.gameService.updateGame(id, updateGameDto)
  }

  @Delete(":id")
  async deleteGameById(@Param("id", ParseIntPipe) id: number) {
    await this.gameService.deleteGame(id)
  }
}
