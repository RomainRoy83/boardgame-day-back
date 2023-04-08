import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Game } from "../../../typeorm/entities/Game"
import { Category } from "../../../typeorm/entities/Category"
import { Repository } from "typeorm"
import { CreateGameParams, UpdateGameParams } from "../../../utils/types"
import { CardAttributes } from "../../../typeorm/entities/CardAttributes"

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(CardAttributes)
    private cardAttributesRepository: Repository<CardAttributes>,
  ) {}

  async findAllGames() {
    return this.gameRepository.find({
      relations: {
        categories: true,
      },
    })
  }

  findGameById(id: number) {
    return this.gameRepository.find({
      where: { id: id },
      relations: {
        categories: true,
        cardAttributes: true,
      },
    })
  }

  async createGame(gameDetails: CreateGameParams, categoriesNames: string[]) {
    const newGame = await this.gameRepository.create({ ...gameDetails })
    for (let i = 0; i < categoriesNames.length; i++) {
      const category = await this.categoryRepository.findBy({
        category_name: categoriesNames[i],
      })
      newGame.categories.push(category[0])
    }
    await this.gameRepository.save(newGame)
  }

  async updateGame(id: number, gameDetails: UpdateGameParams) {
    const game = await this.findGameById(id)
    return this.gameRepository.save({ ...game, ...gameDetails })
  }

  async deleteGame(id: number) {
    return this.gameRepository.delete({ id })
  }
}
