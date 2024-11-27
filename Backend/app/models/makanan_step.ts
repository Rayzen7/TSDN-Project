import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Makanan from './makanan.js'
import Step from './step.js'

export default class MakananStep extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare makananId: number

  @column()
  declare stepId: number

  @belongsTo(() => Makanan, {
    foreignKey: 'makananId',
  })
  declare makanan: BelongsTo<typeof Makanan>

  @belongsTo(() => Step, {
    foreignKey: 'stepId',
  })
  declare step: BelongsTo<typeof Step>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
