import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name_product').notNullable()
      table.string('brand')
      table.string('size')
      table.string('quantity')
      table.string('model')
      table.string('price').notNullable()
      table.string('category')
      table.string('bar_code').notNullable()
      table.string('ntf_numbering')
      table.integer('desative', 11).defaultTo(1)
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
