import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stores extends BaseSchema {
  protected tableName = 'stores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('fantasy_name')
      table.string('soci_reason')
      table.string('cnpj', 14)
      table.string('email')
      table.string('phone')
      table.string('password')
      table.integer('desative', 11).defaultTo(1)
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
