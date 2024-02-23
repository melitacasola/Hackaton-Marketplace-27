"use client"
import { filterData } from "@/app/utils/filterData";
import AdsComponent from "./AdsComponent"
import { useFetchApi } from '@/app/services/useFetchApi';
import { useState,useEffect } from "react";



const AdsList = ({ query }) => {

    const urlApi = 'http://localhost:3200/api/v1/coders-stack'

    const { data, loading, error } = useFetchApi(urlApi);
    const filteredData = filterData(data, query)



    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>

            {filteredData.length > 0 ? (<AdsComponent data={filteredData} />) : (<AdsComponent data={data} />)}


        </div>
    )
}

export default AdsList