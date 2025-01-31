import 'dotenv/config'

const { MYSQL_DATABASE = '', MYSQL_USER = '', MYSQL_PASSWORD = '' } = process.env

export default {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStorage: 'sequelize'
  }
}
