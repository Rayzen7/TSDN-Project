import { HttpContext } from '@adonisjs/core/http'
import Step from '../models/step.js'

export default class StepController {
  public async index({ response }: HttpContext) {
    const steps = await Step.all()
    return response.status(200).json(steps)
  }

  public async show({ params, response }: HttpContext) {
    const step = await Step.find(params.id)

    if (!step) {
      return response.status(404).json({ message: 'Step not found' })
    }

    return response.status(200).json(step)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['text'])
    const step = await Step.create(data)
    return response.status(201).json(step)
  }

  public async update({ params, request, response }: HttpContext) {
    const step = await Step.find(params.id)

    if (!step) {
      return response.status(404).json({ message: 'Step not found' })
    }

    const data = request.only(['text'])
    step.merge(data)
    await step.save()

    return response.status(200).json(step)
  }

  public async destroy({ params, response }: HttpContext) {
    const step = await Step.find(params.id)

    if (!step) {
      return response.status(404).json({ message: 'Step not found' })
    }

    await step.delete()
    return response.status(200).json({ message: 'Step deleted' })
  }
}
