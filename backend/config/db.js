import { config } from 'dotenv';
import Sequelize from "sequelize";


config();

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});


export default db;