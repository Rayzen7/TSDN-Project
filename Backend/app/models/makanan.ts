import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Step from './step.js'
import Bahan from './bahan.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Makanan extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string

  @column()
  declare deskripsi: string

  @column()
  declare gambarUrl: string

  @manyToMany(() => Bahan, {
    pivotTable: 'makanan_bahans',
  })
  declare bahans: ManyToMany<typeof Bahan>

  @manyToMany(() => Step, {
    pivotTable: 'makanan_steps',
  })
  declare steps: ManyToMany<typeof Step>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
