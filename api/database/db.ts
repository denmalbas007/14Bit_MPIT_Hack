import { Sequelize, Options } from 'sequelize'
import config from '../config/db'

const env = process.env.NODE_ENV || 'development'


// @ts-ignore
const db: Sequelize = new Sequelize({
    ...config
})

export default db
