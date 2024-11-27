import { HttpContext } from '@adonisjs/core/http'
import MakananStep from '../models/makanan_step.js'
import Bahan from '#models/bahan'
import Step from '#models/step'

export default class MakananStepController {
  public async index({ response }: HttpContext) {
    const makananStep = await MakananStep.query().preload('makanan').preload('step')
    return response.json(makananStep)
  }

  public async store({ request, response }: HttpContext) {
    const { makananId, stepId } = request.only(['makananId', 'stepId'])
    const makananStep = await MakananStep.create({ makananId, stepId })
    return response.status(201).json(makananStep)
  }

  public async show({ params, response }: HttpContext) {
    const makananStep = await MakananStep.query()
      .where('id', params.id)
      .preload('makanan')
      .preload('step')
      .firstOrFail()
    return response.json(makananStep)
  }

  public async destroy({ params, response }: HttpContext) {
    const makananStep = await MakananStep.findOrFail(params.id)
    await makananStep.delete()
    return response.status(204)
  }

  public async storeBahan({ params, request, response }: HttpContext) {
    const makananId = params.id
    const { text } = request.only(['text'])

    const bahan = await Bahan.create({ text, makananId })

    return response.created(bahan)
  }

  public async storeStep({ params, request, response }: HttpContext) {
    const makananId = params.id
    const { text } = request.only(['text'])

    const step = await Step.create({ text, makananId })

    return response.created(step)
  }
}
