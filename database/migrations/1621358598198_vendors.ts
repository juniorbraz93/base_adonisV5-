import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendors extends BaseSchema {
  protected tableName = 'vendors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.integer('desative', 11).defaultTo(1)
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
