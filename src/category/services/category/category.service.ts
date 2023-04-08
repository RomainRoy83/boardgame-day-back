import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Category } from "../../../typeorm/entities/Category"
import { Repository } from "typeorm"
import { CreateCategoryParams } from "../../../utils/types"

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAllCategories() {
    return this.categoryRepository.find()
  }

  findOneCategory(id: number) {
    return this.categoryRepository.findOneBy({ id: id })
  }

  createCategory(categoryDetails: CreateCategoryParams) {
    const newCategory = this.categoryRepository.create({ ...categoryDetails })
    return this.categoryRepository.save(newCategory)
  }

  updateCategory(id: number, categoryDetails: CreateCategoryParams) {
    return this.categoryRepository.update({ id }, { ...categoryDetails })
  }

  deleteCategory(id: number) {
    return this.categoryRepository.delete({ id })
  }
}
