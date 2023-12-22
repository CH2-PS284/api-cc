const Sequelize = require('sequelize')

// const database = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS, {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: 'mysql',
//     }
// )

const database = new Sequelize(
        'capstone',
        'root',
        'password123456789', {
            host: '34.16.40.205',
            port: '3306',
            dialect: 'mysql',
        }
    )

module.exports = database