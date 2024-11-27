/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import News from './news.js'

export default class CategoryNew extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare "category" : string

  @hasMany(() => News, {
    foreignKey: 'category_news_id',
  })
  declare news: HasMany<typeof News>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}