import { Router } from "express";
import getAllServices from "../../controllers/services.controller"

const routerService = Router();
routerService.get('/services', getAllServices)

export default routerService;

