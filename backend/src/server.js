import express from "express";
import routerService from './v1/routes/services.route.js';
import routerStack from "./v1/routes/stacks.route.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api/v1', routerService)
server.use('/api/v1', routerStack)

export default server;