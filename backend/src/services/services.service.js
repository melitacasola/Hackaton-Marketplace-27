import Services from '../models/services.model.js';

const allServices = async() => {
    const listServices = await Services.findAll();
    return listServices;
};

export default allServices;