import Services from '../models/services.model';

const allServices = async() => {
    const listServices = await Services.findAll();
    return listServices;
};

export default allServices;