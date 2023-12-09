import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DrinksService } from 'App/services/DrinksService'

export default class DrinksController {
  private drinksService: DrinksService

  constructor() {
    this.drinksService = new DrinksService()
  }

  public async getDrinks({ request }: HttpContextContract) {
    return await this.drinksService.getDrinks(request.params()['category'])
  }
}
