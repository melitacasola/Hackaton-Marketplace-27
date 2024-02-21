import CustomError from "../../config/error.js";
import allServices from "../services/services.service.js";

const getAllServices = async(req, res) => {
    try {
        const getServices = await allServices();
        res.status(200).json({data: getServices})
    } catch (error) {
        throw CustomError.badRequest("Request not found")
    }
}

export default getAllServices;




