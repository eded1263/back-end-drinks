import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  ManyToMany,
  belongsTo,
  column,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class Drink extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public instructions: string

  @column()
  public image: string

  @manyToMany(() => User, {
    pivotTable: 'user_favorite_drinks',
    pivotForeignKey: 'drink_id',
    pivotRelatedForeignKey: 'user_id',
  })
  public usersFavorite: ManyToMany<typeof User>

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
