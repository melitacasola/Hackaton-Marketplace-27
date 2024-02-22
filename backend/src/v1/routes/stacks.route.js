import { Router } from "express";
import StacksController from "../../controllers/stacks.controller.js";

const routerStack = Router();

routerStack
    .get("/stacks", StacksController.getAllStacks)
    .get("/stacks/:id", StacksController.getStackById)
    .post("/stacks", StacksController.createStack)
    .patch("/stacks/:id", StacksController.updateStack)

export default routerStack;
