import { Router } from "express";
import MetaCodersStacksController from "../../controllers/metacodersstacks.controller.js";

const routerMetaCodersStacks = Router()

routerMetaCodersStacks.get('/coders-stack', MetaCodersStacksController.getAllStacksController)

export default routerMetaCodersStacks;

