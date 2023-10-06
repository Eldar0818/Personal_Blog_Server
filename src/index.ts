import express, { Application} from 'express'
import cors from 'cors'
import { log } from 'console'
import apiRoutes from './router/provider'
import dbConnection from './utils/dbSet'
import config from 'config'

const app: Application = express()
const router = express.Router()
const port: number = config.get("dev_port")

app.use(express.json())
app.use(cors())

dbConnection(config.get("db_url"))

app.use('/api', apiRoutes())

app.listen(port, () => log(`SERVER STARTED, PORTAL ADDRESS http://localhost:${port}`))