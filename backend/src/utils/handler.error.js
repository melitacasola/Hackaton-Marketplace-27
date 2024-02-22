import CustomError from "../../config/error.js";

const handlerError = (error, res) => {
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
};

export default handlerError;