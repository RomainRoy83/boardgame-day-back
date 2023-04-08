import { Module } from "@nestjs/common"
import { GameModule } from "./game/game.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Game } from "./typeorm/entities/Game"
import { Category } from "./typeorm/entities/Category"
import { Mechanism } from "./typeorm/entities/Mechanism"
import { CategoryModule } from "./category/category.module"
import { MechanismModule } from "./mechanism/mechanism.module"
import { CardAttributes } from "./typeorm/entities/CardAttributes"

require('dotenv').config()

@Module({
  imports: [
    GameModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Game, Category, Mechanism, CardAttributes],
      synchronize: true,
    }),
    CategoryModule,
    MechanismModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
