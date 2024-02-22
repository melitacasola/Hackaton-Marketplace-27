import { DataTypes, UUIDV4 } from "sequelize";
import db from "../../config/db.js";

const MetaCoders = db.define(
    'metacoders_ads',
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4()
        },
        client_firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_num: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_mail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    },	   
)

export default MetaCoders;