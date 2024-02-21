import { DataTypes, UUIDV4 } from "sequelize";
import db from '../../config/db';

const Services = db.define(
    "services",
    {
        id: {
            types: DataTypes.STRING,
            allowNull: false,
            defaultValue: UUIDV4()
        },
        service_name: {
            types: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    },
);

export default Services;




