"use client"
import { filterData } from "@/app/utils/filterData";
import AdsComponent from "./AdsComponent"
import { useFetchApi } from '@/app/services/useFetchApi';
import { useState,useEffect } from "react";



const AdsList = ({ query }) => {
    const urlApi = 'http://localhost:3200/api/v1/coders-stack'

    const [adsList, setListAds] = useState([]);
    const { ads, loading, error } = useFetchApi(urlApi);

    let filterQuery = []
    filterQuery = filterData(ads, query)
    
    useEffect(() => {
        filterQuery = filterData(ads, query)
        setListAds(filterQuery)
    }, [query])

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {
                !ads ?
                    adsList?.map((ads) => (
                        <AdsComponent ads={ads} />
                    ))
                    : <AdsComponent ads={adsList} />
            }

        </div>
    )
}

export default AdsList