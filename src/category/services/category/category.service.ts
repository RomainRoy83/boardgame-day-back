import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Category } from "src/typeorm/entities/Category"
import { Repository } from "typeorm"
import { CreateCategoryParams, UpdateCategoryParams } from "src/utils/types"

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAllCategories() {
    try {
      const categoriesObjects = await this.categoryRepository.find()
      const categoriesNames: string[] = []
      for (let i = 0; i < categoriesObjects.length; i++) {
        categoriesNames.push(categoriesObjects[i].category_name)
      }
      return categoriesNames
    } catch (e) {
      return `Could not retrieve categories: ${e}`;
    }
  }

  // async findOneCategory(id: number) {
  //   const categoryObject = await this.categoryRepository.findOneBy({ id: id })
  //   return categoryObject.category_name
  // }

  async createCategory(categoryDetails: CreateCategoryParams) {
    if (!categoryDetails.category_name.match(/[A-zÀ-ú]/)) {
      return `Could not create category: invalid category name!`
    }

    const existingCategories = await this.findAllCategories()
    if (existingCategories.includes(categoryDetails.category_name)) {
      return `Could not create category: category already exists!`
    }

    try {
      const newCategory = this.categoryRepository.create({ ...categoryDetails })
      return this.categoryRepository.save(newCategory)
    } catch (e) {
      return `Could not create category: ${e}`;
    }
  }

  async updateCategory(id: number, categoryDetails: UpdateCategoryParams) {
    if (!categoryDetails.category_name.match(/[A-zÀ-ú]/)) {
      return `Could not update category ${id}: invalid category name!`
    }

    try {
      return this.categoryRepository.update({ id }, { ...categoryDetails })
    } catch (e) {
      return `Could not update category ${id}:  ${e}`;
    }
  }

  deleteCategory(id: number) {
    try {
      return this.categoryRepository.delete({ id })
    } catch (e) {
      return `Could not delete category ${id}: ${e}`
    }
  }
}
