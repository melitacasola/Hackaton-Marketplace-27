export const filterData = (data, searchParam) => {
    
  let filteredData

  if(searchParam){
    filteredData = data?.filter((entry)=> entry.metacoders_ads[0].location.toLowerCase().includes(searchParam.toLowerCase()))
  }else{
    filteredData = data
  }
    return filteredData;
  
};
