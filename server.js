import express from 'express'
import dotenv from 'dotenv'
import {ConnectionDb} from './database/db.js'
import routes from './router/auth.js'

const server = express()
dotenv.config({path: './config.env'})
server.use(express.json())
ConnectionDb()

server.use('/api/user',  routes)

const PORT = process.env.PORT
server.listen(PORT, ()=> console.log(`Application server is listening on port ${PORT}`))