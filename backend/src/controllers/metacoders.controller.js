import CustomError from "../../config/error.js";
import MetacodersService from "../services/metacoders.service.js";
import handlerError from "../utils/handler.error.js";

const MetacodersController ={
    getAllMetacoders: async(req, res) => {
        try {

            const name = req.query.name
            const location = req.query.location

            let listMetacoders =[]

            if(!name && !location) listMetacoders = await MetacodersService.getAllMetacoders();
            if(name  && !location) listMetacoders = await MetacodersService.getMetacoderByName(name);
            if(!name && location) listMetacoders = await MetacodersService.getMetacoderByLocation(location);

            if (!listMetacoders || listMetacoders.length === 0) throw CustomError.notfound("Request to MetacodersService failed not found")
            res.status(200).json({data: listMetacoders})
        } catch (error) {
            handlerError(error, res)
        }
    },
    
    getMetacoderById: async(req, res) => {
        try {
            const id = req.params.id
            if (!id) throw CustomError.badRequest("no id provided")
            const getMetacoder = await MetacodersService.getMetacoderById(id)
            if (!getMetacoder || getMetacoder.length === 0) throw CustomError.notfound("Request not found")
            res.status(200).json({data: getMetacoder})
        } catch (error) {
            handlerError(error, res)
        }
    },
    
    createMetacoder: async(req, res) => {
        try {
            if (!req.body.firstName) throw CustomError.badRequest("no metacoder name provided")
            if (!req.body.lastName) throw CustomError.badRequest("no metacoder name provided")
            if (!req.body.location) throw CustomError.badRequest("no metacoder location provided")
            if (!req.body.email) throw CustomError.badRequest("no metacoder email provided")
            if (!req.body.client_img) throw CustomError.badRequest("no metacoder image provided")

            console.log(req.body)
            const createMetacoder = await MetacodersService.createMetacoder(req.body)
            
            res.status(201).json({data: createMetacoder})
        } catch (error) {
            handlerError(error, res)
        }
    },
    
    updateMetacoder: async(req, res) => {
        try {
            if (!req.params.id) throw CustomError.badRequest("no metacoder id provided")
            if (!req.body.metacoder_name) throw CustomError.badRequest("no metacoder name provided")
            const updateMetacoder = await MetacodersService.updateMetacoder(req.body, {
                where: {id: req.params.id}
            })
            res.status(200).json({data: updateMetacoder})
        } catch (error) {
            handlerError(error, res)
        }
    }
}

export default MetacodersController;