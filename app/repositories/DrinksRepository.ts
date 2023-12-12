import Drink from 'App/Models/Drink'
export class DrinksRepository {
  public async getDrinks(category?: string) {
    const drinksQuery = Drink.query().select('*')

    if (category) {
      drinksQuery.whereHas('category', (categoryQuery) => {
        categoryQuery.where('slug', category)
      })
    }

    return await drinksQuery
  }
}
