import { DataTypes } from "sequelize";
import db from '../../config/db.js';
import Stacks from "./stacks.model.js"; 
import MetaCoders from "./metacoders.model.js";

const MetaCodersStacks = db.define(
    "metacoders_stacks",
    {
        stack_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        metacoder_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

MetaCodersStacks.hasMany(Stacks, {
    foreignKey: 'id',
    sourceKey: 'stack_id'
})

Stacks.belongsTo(MetaCodersStacks,{
    foreignKey: 'id',
    sourceKey: 'id'
})

MetaCodersStacks.hasMany(MetaCoders, {
    foreignKey: 'id',
    sourceKey: 'metacoder_id'
})

MetaCoders.belongsTo(MetaCodersStacks, {
    foreignKey: 'id',
    sourceKey: 'id'
})

export default MetaCodersStacks;