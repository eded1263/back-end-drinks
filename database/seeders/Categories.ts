import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    await Database.table('categories').multiInsert([
      { name: 'Brasileiro', slug: 'brasileiro' },
      { name: 'Zero Álcool', slug: 'zero-alcool' },
      { name: 'Com vinho', slug: 'com-vinho' },
    ])
  }
}
