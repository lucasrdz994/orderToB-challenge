import { Sequelize } from 'sequelize'
import { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } from '@/config/env.js'

export const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  port: Number(MYSQL_PORT),
  dialect: 'mysql'
})
