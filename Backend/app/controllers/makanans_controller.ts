/* eslint-disable prettier/prettier */
import { HttpContext } from '@adonisjs/core/http'
import Makanan from '../models/makanan.js'

export default class MakananController {
  public async index({ response }: HttpContext) {
    const makanans = await Makanan.query().preload('bahans').preload('steps')
    return response.ok(makanans)
  }

  public async show({ params, response }: HttpContext) {
    try {
        const makanan = await Makanan.findOrFail(params.id)
        
        await makanan.load('bahans')
        await makanan.load('steps')
    
        return response.ok(makanan)
      } catch (error) {
        return response.status(404).json({ message: 'Makanan not found' })
      }
  }

  public async store({ request, response }: HttpContext) {
    const { nama, deskripsi, gambarUrl, bahanIds, stepIds } = request.only([
      'nama',
      'deskripsi',
      'gambarUrl',
      'bahanIds', 
      'stepIds', 
    ])

    const makanan = await Makanan.create({
      nama,
      deskripsi,
      gambarUrl,
    })

    if (bahanIds && bahanIds.length > 0) {
      await makanan.related('bahans').sync(bahanIds)
    }

    if (stepIds && stepIds.length > 0) {
      await makanan.related('steps').sync(stepIds)
    }

    await makanan.load('bahans')
    await makanan.load('steps')

    return response.created(makanan)
  }

  public async update({ params, request, response }: HttpContext) {
    const makanan = await Makanan.findOrFail(params.id)
    const { nama, deskripsi, gambarUrl } = request.only([
      'nama',
      'deskripsi',
      'gambarUrl',
    ])

    makanan.merge({
      nama,
      deskripsi,
      gambarUrl: gambarUrl,
    })
    await makanan.save()

    return response.ok(makanan)
  }

  public async destroy({ params, response }: HttpContext) {
    const makanan = await Makanan.findOrFail(params.id)
    await makanan.delete()
    return response.ok({ message: 'Makanan deleted successfully' })
  }
}
