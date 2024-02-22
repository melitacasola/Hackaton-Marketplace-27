export const filterData = (data, searchParam = "") => {
    
    if (!searchParam) {
      return data; 
    }

    const searchTermLowerCase = searchParam.toLowerCase();

    const filteredClient = data?.filter(entry => {
        const clientFilter = entry.metacoders_ads[0].location.toLowerCase();
        
        return clientFilter.includes(searchTermLowerCase);
    });

    console.log('Datos filtrados:', filteredClient);
    
    return filteredClient;

};
