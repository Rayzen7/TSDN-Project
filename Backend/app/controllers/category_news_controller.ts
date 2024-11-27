import { HttpContext } from '@adonisjs/core/http'
import CategoryNews from '../models/category_new.js'
import News from '#models/news'

export default class CategoryNewsController {
  public async index({ response }: HttpContext) {
    try {
      const categories = await CategoryNews.query().preload('news')
      return response.status(200).json(categories)
    } catch (error) {
      console.error('Error:', error)
      return response.status(500).json({ message: 'Gagal mengambil data kategori berita', error })
    }
  }

  public async show({ params, response }: HttpContext) {
    try {
      const news = await News.query()
        .preload('categoryNew')
        .where('category_news_id', params.id)
        .exec()

      if (!news) {
        return response.status(404).json({ message: 'No news found for this category' })
      }

      return response.json(news)
    } catch (error) {
      console.error('Error fetching news:', error)
      return response.status(500).json({ message: 'Failed to fetch news by category', error })
    }
  }

  public async store({ request, response }: HttpContext) {
    try {
      const { category } = request.only(['category'])
      const newCategory = await CategoryNews.create({ category })
      return response.status(201).json(newCategory)
    } catch (error) {
      return response.status(500).json({ message: 'Gagal menambahkan kategori berita', error })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const category = await CategoryNews.findOrFail(params.id)
      const { category: newCategoryName } = request.only(['category'])
      category.category = newCategoryName
      await category.save()
      return response.status(200).json(category)
    } catch (error) {
      return response.status(404).json({ message: 'Kategori berita tidak ditemukan', error })
    }
  }

  public async destroy({ params, response }: HttpContext) {
    try {
      const category = await CategoryNews.findOrFail(params.id)
      await category.delete()
      return response.status(200).json({ message: 'Kategori berita berhasil dihapus' })
    } catch (error) {
      return response.status(404).json({ message: 'Kategori berita tidak ditemukan', error })
    }
  }
}
