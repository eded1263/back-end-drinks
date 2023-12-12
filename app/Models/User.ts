import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Drink from './Drink'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @manyToMany(() => Drink, {
    pivotTable: 'user_favorite_drinks',
    pivotRelatedForeignKey: 'drink_id',
    pivotForeignKey: 'user_id',
  })
  public favoriteDrinks: ManyToMany<typeof Drink>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
