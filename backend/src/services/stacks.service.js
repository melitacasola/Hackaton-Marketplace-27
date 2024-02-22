import { Op } from "sequelize";
import Stacks from "../models/stacks.model.js";
import Services from "../models/services.model.js";

const StacksService =  {
    getAllStacks: async()=>{
        try {
            const listStacks = await Stacks.findAll(
                {include: {
                    model: Services
                }}
            )
            return listStacks
        } catch (error) {
            throw error
        }
    },

    getStackById: async(id)=>{
        try {
            const stack = await Stacks.findByPk(id, {
                include: {
                    model: Services
                }
            })
            return stack
        } catch (error) {
            throw error
        }
    },
    
    getStackByName: async(name)=>{	
        try {
            const stack = await Stacks.findAll({
                include: {
                    model: Services,
                    attributes: ['service_name'],
                },
                where: {
                    stack_name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
            return stack
        } catch (error) {
            throw error
        }
    },

    getStackByService: async(service)=>{
        try {
            const stack = await Stacks.findAll({
                include: {
                    model: Services,
                    attributes: ['service_name'],
                    where: {
                        service_name: {
                            [Op.like]: `%${service}%`
                        }
                    }
                }
            })
            return stack
        } catch (error) {
            throw error
        }
    },
    
    createStack: async(stack)=>{
        try {
            const newStack = await Stacks.create(stack)
            return newStack
        } catch (error) {
            throw error
        }
    },

    updateStack: async(id, stack)=>{
        try {
            const updatedStack = await Stacks.update(stack, {
                where: {
                    id: id
                }
            })
            return updatedStack
        } catch (error) {
            throw error
        }
    },

}

export default StacksService