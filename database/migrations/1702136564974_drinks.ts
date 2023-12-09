import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'drinks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('slug')
      table.text('instructions')
      table.string('image')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
      table.engine('InnoDB')
    })
  }

  public async down() {
    await this.schema.dropTable(this.tableName)
  }
}
