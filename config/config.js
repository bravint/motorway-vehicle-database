require('dotenv').config();

module.exports = {
development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV,
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_TEST_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_PROD,
    host: process.env.DB_PROD_HOST,
    dialect: 'postgres',
  }
}
