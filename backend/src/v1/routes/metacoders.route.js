import { Router } from "express";
import MetacodersController from "../../controllers/metacoders.controller.js";

const routerMetacoder = Router();

routerMetacoder
    .get("/metacoders", MetacodersController.getAllMetacoders)
    .get("/metacoders/:id", MetacodersController.getMetacoderById)
    .post("/metacoders", MetacodersController.createMetacoder)
    .patch("/metacoders/:id", MetacodersController.updateMetacoder)

export default routerMetacoder;