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
import { CategoryService } from "../../services/category/category.service"
import { CreateCategoryDto } from "../../dtos/CreateCategory.dto"

@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategories() {
    return this.categoryService.findAllCategories()
  }

  // @Get(":id")
  // getOneCategory(@Param("id", ParseIntPipe) id: number) {
  //   return this.categoryService.findOneCategory(id)
  // }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto)
  }

  @Put(":id")
  async updateCategory(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCategoryDto,
  ) {
    await this.categoryService.updateCategory(id, updateCategoryDto)
  }

  @Delete(":id")
  async deleteCategory(@Param("id", ParseIntPipe) id: number) {
    await this.categoryService.deleteCategory(id)
  }
}
