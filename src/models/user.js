const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv')
const Pesan = require('./pesan.js')
dotenv.config()

const DB_HOST = '34.16.40.205'
const DB_USER = 'root'
const DB_PASS = 'password123456789'
const DB_NAME = 'capstone'

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:3306/${DB_NAME}`)

const User = sequelize.define('users', {
    id_user: {
        type: DataTypes.STRING, 
        primaryKey: true, 
        allowNull: false,

    },
    nama: {
       type: DataTypes.STRING(255),
       allowNull: false

    },
    
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
 
     },

     no_hp: {
        type: DataTypes.STRING(16),
        allowNull: false
 
     },

     password: {
        type: DataTypes.STRING(255),
        allowNull: false
 
     },
},{sequelize, modelName:'user'})
Pesan.belongsTo(User, {
   foreignKey: 'id_user', 
   onDelete: 'CASCADE',  
   onUpdate: 'CASCADE'
   
})
User.hasMany(Pesan, {foreignKey:'id_user'})
module.exports = User