import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_favorite_drinks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned()
      table.integer('drink_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.foreign('drink_id').references('drinks.id')
      table.timestamps()
      table.engine('InnoDB')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
