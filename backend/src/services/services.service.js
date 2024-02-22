import Services from '../models/services.model.js';

const allServices = async() => {
    try {
        const listServices = await Services.findAll();
        return listServices;
    } catch (error) {
        throw error;
    }   
};

export default allServices;