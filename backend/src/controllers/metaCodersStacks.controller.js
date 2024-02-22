import CustomError from "../../config/error.js"
import MetaCodersStacksService from "../services/metacodersstacks.service.js"

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
                listMetaCodersStacks = await MetaCodersStacksService.getAllMetaCodersStacks(stack_id)

            } else {
                listMetaCodersStacks = await MetaCodersStacksService.getAllMetaCodersStacks(metacoder_id)
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