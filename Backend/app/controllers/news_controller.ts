/* eslint-disable prettier/prettier */
import { HttpContext } from '@adonisjs/core/http'
import News from '../models/news.js'
import CategoryNews from '../models/category_new.js'

class NewsController {
  public async index({ response }: HttpContext) {
    const news = await News.query().preload('categoryNew') 
    console.log(news)
    return response.json(news)
  }

  public async show({ params, response }: HttpContext) {
    const news = await News.query().preload('categoryNew').where('id', params.id).first()
    if (!news) {
      return response.status(404).json({ message: 'News not found' })
    }
    return response.json(news)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'description', 'link', 'image', 'category_news_id'])
  
    if (!data.category_news_id) {
      return response.status(400).json({ message: 'category_news_id is required' })
    }
  
    const category = await CategoryNews.find(data.category_news_id)
    if (!category) {
      return response.status(404).json({ message: 'Category not found' })
    }
  
    const news = await News.create(data)
    return response.status(201).json(news)
  }

  public async update({ params, request, response }: HttpContext) {
    const news = await News.find(params.id)
    if (!news) {
      return response.status(404).json({ message: 'News not found' })
    }
  
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { title, description, link, image, category_news_id } = request.only(['title', 'description', 'link', 'image', 'category_news_id'])
  
    if (!category_news_id) {
      return response.status(400).json({ message: 'category_news_id is required' })
    }
  
    const category = await CategoryNews.find(category_news_id)
    if (!category) {
      return response.status(404).json({ message: 'Category not found' })
    }
  
    news.merge({
      title,
      description,
      link,
      image,
      category_news_id,
    })
  
    await news.save()
    return response.json(news)
  }
  

  public async destroy({ params, response }: HttpContext) {
    const news = await News.find(params.id)
    if (!news) {
      return response.status(404).json({ message: 'News not found' })
    }

    await news.delete()
    return response.status(200).json({ message: 'News deleted' })
  }
}

export default NewsController
