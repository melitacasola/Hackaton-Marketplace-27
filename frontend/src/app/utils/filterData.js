export const filterData = (data, searchParam) => {

    console.log(searchParam);
    
    if (!searchParam) {
      return data; 
    }

    const searchTermLowerCase = searchParam.toLowerCase();

    // filtrar -> location / stack 
    const filteredClient = data?.filter(entry => {
        const clientFilter = entry.metacoders_ads[0].location.toLowerCase();
        
        return clientFilter.includes(searchTermLowerCase);
    });

    console.log('Datos filtrados:', filteredClient);
    
    return filteredClient;

};
