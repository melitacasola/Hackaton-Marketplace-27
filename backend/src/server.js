import express from "express";
import routerService from './v1/routes/services.route.js';
import routerStack from "./v1/routes/stacks.route.js";
import routerMetacoder from "./v1/routes/metacoders.route.js";
import routerMetaCodersStacks from "./v1/routes/metacodersstacks.route.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api/v1', routerService)
server.use('/api/v1', routerStack)
server.use('/api/v1', routerMetacoder);
server.use('/api/v1', routerMetaCodersStacks)

export default server;