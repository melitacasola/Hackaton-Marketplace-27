import MetaCoders from "../models/metacoders.model.js";
import MetaCodersStacks from "../models/metacodersStacks.model.js";
import Stacks from "../models/stacks.model.js";

const MetaCodersStacksService = {
    getAllMetaCodersStacks: async () => {
        try {
            const listMetaCodersStacks = await MetaCodersStacks.findAll(
                {
                    include: [
                        {
                            model: MetaCoders,
                            attributes: [
                                "client_firstname",
                                "client_lastname",
                                "contact_num",
                                "contact_mail",
                                "location"
                            ]
                        },
                        {
                            model: Stacks,
                            attributes: ['stack_name']
                        }
                    ],
                    through: { attributes: [] }
                }
            )
            return listMetaCodersStacks
        } catch (error) {
            throw error
        }
    },
    getAllStacksById: async (stack_id) => {
        try {
            const listMetaCodersStacks = await MetaCodersStacks.findAll(
                {
                    where: {
                        stack_id: stack_id
                    },
                    include: [
                        {
                            model: MetaCoders,
                            attributes: [
                                "client_firstname",
                                "client_lastname",
                                "contact_num",
                                "contact_mail",
                                "location"
                            ]
                        },
                        {
                            model: Stacks,
                            attributes: ['stack_name']
                        }
                    ],
                    through: { attributes: [] }
                }
            )
            return listMetaCodersStacks
        } catch (error) {
            throw error
        }
    },

    getAllMetacoderById: async (metacoder_id) => {
        try {
            const listMetaCodersStacks = await MetaCodersStacks.findAll(
                {
                    where: {
                        metacoder_id: metacoder_id
                    },
                    include: [
                        {
                            model: MetaCoders,
                            attributes: [
                                "client_firstname",
                                "client_lastname",
                                "contact_num",
                                "contact_mail",
                                "location"
                            ]
                        },
                        {
                            model: Stacks,
                            attributes: ['stack_name']
                        }
                    ],
                    through: { attributes: [] }
                }
            )
            return listMetaCodersStacks
        } catch (error) {
            throw error
        }
    },



}

export default MetaCodersStacksService;