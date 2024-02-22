import CustomError from "../../config/error.js";
import StacksService from "../services/stacks.service.js"
import handlerError from "../utils/handler.error.js"

const StacksController = {
    getAllStacks: async(req, res) => {
        try {
            const name = req.query.name
            const service = req.query.service

            let listStacks = []

            if (!name || !service) listStacks = await StacksService.getAllStacks()

            if (name) listStacks = await StacksService.getStackByName(name)

            if (service) listStacks = await StacksService.getStackByService(service)                     
       
            if (!listStacks || listStacks.length === 0) throw CustomError.notfound("Request to StacksService failed not found")
            res.status(200).json({data: listStacks})

        } catch (error) {
            handlerError(error, res)
        }
    },
    
    getStackById: async(req, res) => {
        try {
            const id = req.params.id
            if (!id) throw CustomError.badRequest("no id provided")
            const getStack = await StacksService.getStackById(id)
            if (!getStack || getStack.length === 0) throw CustomError.notfound("Request not found")
            res.status(200).json({data: getStack})
        } catch (error) {
            handlerError(error, res)
        }
    },

    createStack: async(req, res) => {
        try {
            if (!req.body.stack_name) throw CustomError.badRequest("no stack name provided")
            if (!req.body.service_id) throw CustomError.badRequest("no service id provided")
            const createStack = await StacksService.createStack(req.body)
            res.status(201).json({data: createStack})
        } catch (error) {
            handlerError(error, res)
        }
    },

    updateStack: async(req, res) => {
        try {
            if (!req.params.id) throw CustomError.badRequest("no Stack id provided")
            if (!req.body.stack_name) throw CustomError.badRequest("no stack name provided")
            if (!req.body.service_id) throw CustomError.badRequest("no service id provided")
            const updateStack = await Stacks.update(req.body, {
                where: {id: req.params.id}
            })
            res.status(200).json({data: updateStack})
        } catch (error) {
            handlerError(error, res)
        }
    }
}

export default StacksController;