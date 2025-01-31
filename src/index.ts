import express from 'express'
import { AppRouter } from './routes/index.js'
import { appOnError } from './shared/utils/errorHandler.js'

const app = express()

const router = new AppRouter()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api', router.getRoutes())

app.use(appOnError)

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Server ready')
})
