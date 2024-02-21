import express from "express";
import routerService from "./src/v1/routes/services.route";

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/v1', routerService)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});