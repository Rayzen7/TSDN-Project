/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import CategoryNew from './category_new.js'

export default class News extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare link: string

  @column()
  declare image: string

  @column()
  declare category_news_id: number

  @belongsTo(() => CategoryNew, {
    foreignKey: 'category_news_id'
  })
  declare categoryNew: BelongsTo<typeof CategoryNew>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}