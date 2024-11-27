/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return { hello: 'world' }
})

router.group(() => {
  router.get('/', async (ctx) => {
    const { default: NewsController } = await import('../app/controllers/news_controller.js')
    const newsController = new NewsController()

    return await newsController.index(ctx)
  })

  router.get('/:id', async (ctx) => {
    const { default: NewsController } = await import('../app/controllers/news_controller.js')
    const newsController = new NewsController()

    return await newsController.show(ctx)
  })

  router.post('/', async (ctx) => {
    const { default: NewsController } = await import('../app/controllers/news_controller.js')
    const newsController = new NewsController()

    return await newsController.store(ctx)
  })

  router.put('/:id', async (ctx) => {
    const { default: NewsController } = await import('../app/controllers/news_controller.js')
    const newsController = new NewsController()

    return await newsController.update(ctx)
  })

  router.delete('/:id', async (ctx) => {
    const { default: NewsController } = await import('../app/controllers/news_controller.js')
    const newsController = new NewsController()

    return await newsController.destroy(ctx)
  })

  router.get('/category-news', async (ctx) => {
    const { default: CategoryNewsController } = await import('../app/controllers/category_news_controller.js')
    const categoryNewsController = new CategoryNewsController()

    return await categoryNewsController.index(ctx)
  })

  router.get('/category-news/:id', async (ctx) => {
    const { default: CategoryNewsController } = await import('../app/controllers/category_news_controller.js')
    const categoryNewsController = new CategoryNewsController()

    return await categoryNewsController.show(ctx)
  })

  router.post('/category-news', async (ctx) => {
    const { default: CategoryNewsController } = await import('../app/controllers/category_news_controller.js')
    const categoryNewsController = new CategoryNewsController()

    return await categoryNewsController.store(ctx)
  })

  router.put('/category-news/:id', async (ctx) => {
    const { default: CategoryNewsController } = await import('../app/controllers/category_news_controller.js')
    const categoryNewsController = new CategoryNewsController()

    return await categoryNewsController.update(ctx)
  })

  router.delete('/category-news/:id', async (ctx) => {
    const { default: CategoryNewsController } = await import('../app/controllers/category_news_controller.js')
    const categoryNewsController = new CategoryNewsController()

    return await categoryNewsController.destroy(ctx)
  })
}).prefix('/news')

router.group(() => {
  
  router.get('/bahan', async (ctx) => {
    const { default: BahanController } = await import('../app/controllers/bahans_controller.js')
    const bahanController = new BahanController()
    return await bahanController.index(ctx)
  })
  
  router.get('/bahan/:id', async (ctx) => {
    const { default: BahanController } = await import('../app/controllers/bahans_controller.js')
    const bahanController = new BahanController()
    return await bahanController.show(ctx)
  })
  
  router.post('/bahan', async (ctx) => {
    const { default: BahanController } = await import('../app/controllers/bahans_controller.js')
    const bahanController = new BahanController()
    return await bahanController.store(ctx)
  })
  
  router.put('/bahan/:id', async (ctx) => {
    const { default: BahanController } = await import('../app/controllers/bahans_controller.js')
    const bahanController = new BahanController()
    return await bahanController.update(ctx)
  })
  
  router.delete('/bahan/:id', async (ctx) => {
    const { default: BahanController } = await import('../app/controllers/bahans_controller.js')
    const bahanController = new BahanController()
    return await bahanController.destroy(ctx)
  })
  
  router.get('/step', async (ctx) => {
    const { default: StepController } = await import('../app/controllers/steps_controller.js')
    const stepController = new StepController()
    return await stepController.index(ctx)
  })
  
  router.get('/step/:id', async (ctx) => {
    const { default: StepController } = await import('../app/controllers/steps_controller.js')
    const stepController = new StepController()
    return await stepController.show(ctx)
  })
  
  router.post('/step', async (ctx) => {
    const { default: StepController } = await import('../app/controllers/steps_controller.js')
    const stepController = new StepController()
    return await stepController.store(ctx)
  })
  
  router.put('/step/:id', async (ctx) => {
    const { default: StepController } = await import('../app/controllers/steps_controller.js')
    const stepController = new StepController()
    return await stepController.update(ctx)
  })
  
  router.delete('/step/:id', async (ctx) => {
    const { default: StepController } = await import('../app/controllers/steps_controller.js')
    const stepController = new StepController()
    return await stepController.destroy(ctx)
  })

  router.get('/makanan-bahan', async (ctx) => {
    const { default: MakananBahanController } = await import('../app/controllers/makanan_bahans_controller.js')
    const controller = new MakananBahanController()
    return controller.index(ctx)
  })

  router.post('/makanan-bahan', async (ctx) => {
    const { default: MakananBahanController } = await import('../app/controllers/makanan_bahans_controller.js')
    const controller = new MakananBahanController()
    return controller.store(ctx)
  })

  router.get('/makanan-bahan/:id', async (ctx) => {
    const { default: MakananBahanController } = await import('../app/controllers/makanan_bahans_controller.js')
    const controller = new MakananBahanController()
    return controller.show(ctx)
  })

  router.delete('/makanan-bahan/:id', async (ctx) => {
    const { default: MakananBahanController } = await import('../app/controllers/makanan_bahans_controller.js')
    const controller = new MakananBahanController()
    return controller.destroy(ctx)
  })

  router.get('/makanan-step', async (ctx) => {
    const { default: MakananStepController } = await import('../app/controllers/makanan_steps_controller.js')
    const controller = new MakananStepController()
    return controller.index(ctx)
  })

  router.post('/makanan-step', async (ctx) => {
    const { default: MakananStepController } = await import('../app/controllers/makanan_steps_controller.js')
    const controller = new MakananStepController()
    return controller.store(ctx)
  })

  router.get('/makanan-step/:id', async (ctx) => {
    const { default: MakananStepController } = await import('../app/controllers/makanan_steps_controller.js')
    const controller = new MakananStepController()
    return controller.show(ctx)
  })

  router.delete('/makanan-step/:id', async (ctx) => {
    const { default: MakananStepController } = await import('../app/controllers/makanan_steps_controller.js')
    const controller = new MakananStepController()
    return controller.destroy(ctx)
  })

}).prefix('/api')

router.group(() => {
  router.get('/', async (ctx) => {
    const { default: MakananController } = await import('../app/controllers/makanans_controller.js')
    const makananController = new MakananController()
    return await makananController.index(ctx)
  })

  router.get('/:id', async (ctx) => {
    const { default: MakananController } = await import('../app/controllers/makanans_controller.js')
    const makananController = new MakananController()
    return await makananController.show(ctx)
  })

  router.post('/', async (ctx) => {
    const { default: MakananController } = await import('../app/controllers/makanans_controller.js')
    const makananController = new MakananController()
    return await makananController.store(ctx)
  })

  router.put('/:id', async (ctx) => {
    const { default: MakananController } = await import('../app/controllers/makanans_controller.js')
    const makananController = new MakananController()
    return await makananController.update(ctx)
  })

  router.delete('/:id', async (ctx) => {
    const { default: MakananController } = await import('../app/controllers/makanans_controller.js')
    const makananController = new MakananController()
    return await makananController.destroy(ctx)
  })
}).prefix('/makanan')