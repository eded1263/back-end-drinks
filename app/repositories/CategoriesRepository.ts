import Category from 'App/Models/Category'

export class CategoriesRepository {
  public async getCategories() {
    const categories = await Category.all()

    return categories
  }
}
