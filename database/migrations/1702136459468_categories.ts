import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('slug')
      table.timestamps()
      table.engine('InnoDB')
    })
  }

  public async down() {
    await this.schema.dropTable(this.tableName)
  }
}
