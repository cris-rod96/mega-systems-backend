import cors from 'cors'
import express, { json } from 'express'
import logger from 'morgan'

const server = express()

server.use(cors())
server.use(logger('dev'))
server.use(
  json({
    limit: '5mb',
  })
)

export default server
