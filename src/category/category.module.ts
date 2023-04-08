import { Module } from "@nestjs/common"
import { CategoryController } from "./controllers/category/category.controller"
import { CategoryService } from "./services/category/category.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Category } from "../typeorm/entities/Category"

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
