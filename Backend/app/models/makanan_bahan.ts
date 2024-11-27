import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Makanan from './makanan.js'
import Bahan from './bahan.js'

export default class MakananBahan extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare makananId: number

  @column()
  declare bahanId: number

  @belongsTo(() => Makanan, {
    foreignKey: 'makananId',
  })
  declare makanan: BelongsTo<typeof Makanan>

  @belongsTo(() => Bahan, {
    foreignKey: 'bahanId',
  })
  declare bahan: BelongsTo<typeof Bahan>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
