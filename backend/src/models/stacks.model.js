import { DataTypes, UUIDV4 } from "sequelize";
import db from '../../config/db';

const Stacks = db.define(
    "stacks",
    {
        id: {
            types: DataTypes.STRING,
            allowNull: false,
            defaultValue: UUIDV4()
        },
        stack_name: {
            types: DataTypes.STRING,
            allowNull: false
        },
        service_id: {
            types: DataTypes.STRING,
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




