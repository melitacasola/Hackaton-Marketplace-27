import { DataTypes } from "sequelize";
import db from '../../config/db.js';

const MetaCodersStacks = db.define(
    "metaCodersStacks",
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
    foreignKey: 'stack_id',
    sourceKey: 'id'
})

Stacks.belongsTo(MetaCodersStacks,{
    foreignKey: 'id',
    sourceKey: 'stack_id'
})


MetaCodersStacks.hasMany(Metacoders, {
    foreignKey: 'metacoder_id',
    sourceKey: 'id'
})

MetaCoders.belongsTo(MetaCodersStacks, {
    foreignKey: 'id',
    sourceKey: 'metacoder_id'
})


export default MetaCodersStacks;