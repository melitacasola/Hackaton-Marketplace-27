import CustomError from "../../config/error.js"
import MetaCodersStacksService from "../services/metacodersstacks.service.js"
import handlerError from "../utils/handler.error.js"

const MetaCodersStacksController = {
    getAllStacksController: async (req, res) => {
        try {
            const stack_id = req.query.stack_id
            const metacoder_id = req.query.metacoder_id

            let listMetaCodersStacks = []
            
            if (!stack_id && !metacoder_id) {
                listMetaCodersStacks = await MetaCodersStacksService.getAllMetaCodersStacks()
            }
            if (stack_id && !metacoder_id) {
                listMetaCodersStacks = await MetaCodersStacksService.getAllStacksById(stack_id)

            } 
            if (!stack_id && metacoder_id) {
                listMetaCodersStacks = await MetaCodersStacksService.getAllMetacoderById(metacoder_id)
            }

            
            if (!listMetaCodersStacks || listMetaCodersStacks.length === 0) throw CustomError.notfound("Request to MetaCodersStacksService not found")
           
            
            res.status(200).json({ data: listMetaCodersStacks })
        }
        catch (error) {
            handlerError(error, res)
        }
    }
}

export default MetaCodersStacksController;