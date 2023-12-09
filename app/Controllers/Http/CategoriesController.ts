import { CategoriesService } from 'App/services/CategoriesService'

export default class CategoriesController {
  private categoriesService: CategoriesService

  constructor() {
    this.categoriesService = new CategoriesService()
  }

  public async getCategories() {
    return await this.categoriesService.getCategories()
  }
}
