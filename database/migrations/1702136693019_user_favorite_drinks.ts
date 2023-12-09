import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_favorite_drinks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.foreign('user_id').references('users.id')
      table.foreign('drink_id').references('drinks.id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
