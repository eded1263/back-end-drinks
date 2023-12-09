import { DrinksRepository } from 'App/repositories/DrinksRepository'

export class DrinksService {
  private drinksRepository: DrinksRepository
  constructor() {
    this.drinksRepository = new DrinksRepository()
  }
  public async getDrinks(categorySlug?: string) {
    return await this.drinksRepository.getDrinks(categorySlug)
  }
}
