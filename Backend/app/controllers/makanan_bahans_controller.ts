// app/Controllers/Http/MakananBahanController.ts

import { HttpContext } from '@adonisjs/core/http'
import MakananBahan from '../models/makanan_bahan.js'

export default class MakananBahanController {
  public async index({ response }: HttpContext) {
    const makananBahan = await MakananBahan.query().preload('makanan').preload('bahan')
    return response.json(makananBahan)
  }

  public async store({ request, response }: HttpContext) {
    const { makananId, bahanId } = request.only(['makananId', 'bahanId'])
    const makananBahan = await MakananBahan.create({ makananId, bahanId })
    return response.status(201).json(makananBahan)
  }

  public async show({ params, response }: HttpContext) {
    const makananBahan = await MakananBahan.query()
      .where('id', params.id)
      .preload('makanan')
      .preload('bahan')
      .firstOrFail()
    return response.json(makananBahan)
  }

  public async destroy({ params, response }: HttpContext) {
    const makananBahan = await MakananBahan.findOrFail(params.id)
    await makananBahan.delete()
    return response.status(204)
  }
}
