import { DATABASE_CONFIG } from '../config/config.js'
import { Sequelize } from 'sequelize'
import { models } from '../models/index.models.js'
const sq = new Sequelize(DATABASE_CONFIG.URI, DATABASE_CONFIG.OPTIONS)

models.forEach((model) => model(sq))

export { sq }
