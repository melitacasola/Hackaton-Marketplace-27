
export const filterData = (data, searchParam='') => {

    if (searchParam.length === 0) return data; 

    const searchTermLowerCase = searchParam.toLowerCase();

    const filteredClient = data?.filter(entry => {
        const clientFilter = entry.metacoders_ads[0].location.toLowerCase();
        
        return clientFilter.includes(searchTermLowerCase);
    });
   
    return filteredClient;

};
