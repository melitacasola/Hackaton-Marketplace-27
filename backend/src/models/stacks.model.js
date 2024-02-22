import { DataTypes, UUIDV4 } from "sequelize";
import db from '../../config/db.js';
import Services from "./services.model.js";

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

Stacks.hasMany(Services,{
    foreignKey: 'id',
    sourceKey: 'service_id'
  });

Services.belongsTo(Stacks,{
    foreignKey: 'id',
    targetKey: 'id'
  })

export default Stacks;




