"use client"
import { filterData } from "@/app/utils/filterData";
import AdsComponent from "./AdsComponent"
import { useFetchApi } from '@/app/services/useFetchApi';
import { useState } from "react";



const AdsList = ({query}) => {
    const urlApi = 'http://localhost:3200/api/v1/coders-stack'

    const [adsList, setAds] = useState([]);

    const { ads, loading, error } = useFetchApi(urlApi);

    
    const filterQuery = filterData(ads, query)
    console.log(ads);
    console.log(filterQuery);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div>
            {
                filterQuery?.map((ads) =>(
                    
                    <AdsComponent ads={ads} key={ads.metacoder_id} />
                ))
            }
        
        </div>
    )
}

export default AdsList