import { HttpContext } from '@adonisjs/core/http'
import Bahan from '../models/bahan.js'

export default class BahanController {
  public async index({ response }: HttpContext) {
    const bahan = await Bahan.query()
    return response.status(200).json(bahan)
  }

  public async show({ params, response }: HttpContext) {
    const bahan = await Bahan.find(params.id)

    if (!bahan) {
      return response.status(404).json({ message: 'Bahan not found' })
    }

    return response.status(200).json(bahan)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['text'])
    const bahan = await Bahan.create(data)
    return response.status(201).json(bahan)
  }

  public async update({ params, request, response }: HttpContext) {
    const bahan = await Bahan.find(params.id)

    if (!bahan) {
      return response.status(404).json({ message: 'Bahan not found' })
    }

    const data = request.only(['text'])
    bahan.merge(data)
    await bahan.save()

    return response.status(200).json(bahan)
  }

  public async destroy({ params, response }: HttpContext) {
    const bahan = await Bahan.find(params.id)

    if (!bahan) {
      return response.status(404).json({ message: 'Bahan not found' })
    }

    await bahan.delete()
    return response.status(200).json({ message: 'Bahan deleted' })
  }
}
