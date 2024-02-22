import { Op } from'sequelize';
import MetaCoders from "../models/metacoders.model.js";

const MetacodersService ={
    getAllMetacoders: async()=>{
        try {
            const listMetacoders = await MetaCoders.findAll();
            return listMetacoders;
        } catch (error) {
            console.log(error);
        }
    },
    getMetacoderById: async(id)=>{
        try {
            const metacoder = await MetaCoders.findByPk(id);
            return metacoder;
        } catch (error) {
            console.log(error);
        }
    },
    getMetacoderByName: async(name)=>{
        try {
            const metacoder = await MetaCoders.findAll({
                where: {
                    client_firstname: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            return metacoder;
        } catch (error) {
            console.log(error);
        }
    },
    getMetacoderByLocation: async(location)=>{
        try {
            const metacoder = await MetaCoders.findAll({
                where: {
                    location: {
                        [Op.like]: `%${location}%`
                    }
                }
            });
            return metacoder;
        } catch (error) {
            console.log(error);
        }
    },
    createMetacoder: async(metacoder)=>{
        try {
            const createMetacoder = await MetaCoders.create(metacoder);
            return createMetacoder;
        } catch (error) {
            console.log(error);
        }
    },

    updateMetacoder: async(id, metacoder)=>{
        try {
            const updateMetacoder = await MetaCoders.update(metacoder, {
                where: {
                    id: id
                }
            });
            return updateMetacoder;
        } catch (error) {
            console.log(error);
        }
    },
}

export default MetacodersService;