import { DataTypes, UUIDV4 } from "sequelize";
import db from '../../config/db.js';

const Stacks = db.define(
    "stacks",
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4()
        },
        stack_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    },
);

Stacks.hasMany(Services);
Services.belongsTo(Stacks);

export default Stacks;




