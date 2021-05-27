import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name_product: string

  @column()
  public brand: string

  @column()
  public size: string

  @column()
  public quantity: string

  @column()
  public model: string

  @column()
  public title: string
  @column()
  public price: string

  @column()
  public category: string

  @column()
  public bar_code: string

  @column()
  public ntf_numbering: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

// 'name_product'
//       'brand'
//       'size'
//       'quantity'
//       'model'
//       'price'
//       'category'
//       'bar_code'
//       'ntf_numbering'
