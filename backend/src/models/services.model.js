import { DataTypes, UUIDV4 } from "sequelize";
import db from '../../config/db.js';

const Services = db.define(
    "services",
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4()
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    },
);

export default Services;