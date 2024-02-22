import MetaCodersStacks from "../models/metacodersStacks.model.js";
import Stacks from "../models/stacks.model.js";

const MetaCodersStacksService = {
    getAllMetaCodersStacks: async () => {
        try {
            const listMetaCodersStacks = await MetaCodersStacks.findAll(
                {
                    include: {
                        model: Stacks
                    },
                    include: {
                        model: Metacoders
                    }
                }
            )
            return listMetaCodersStacks
        } catch (error) {
            throw error
        }
    },


}

export default MetaCodersStacksService;