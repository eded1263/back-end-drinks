import { CategoriesRepository } from 'App/repositories/CategoriesRepository'

export class CategoriesService {
  private categoriesRepository: CategoriesRepository
  constructor() {
    this.categoriesRepository = new CategoriesRepository()
  }
  public async getCategories() {
    return await this.categoriesRepository.getCategories()
  }
}
