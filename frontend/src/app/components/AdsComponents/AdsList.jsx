"use client"
import AdsComponent from "./AdsComponent"
import { useFetchApi } from '@/app/utils/useFetchApi';



const AdsList = () => {
    const urlApi = 'http://localhost:3200/api/v1/coders-stack'

    const { ads, loading, error } = useFetchApi(urlApi);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div>
            <AdsComponent ads={ads}/>
        </div>
    )
}

export default AdsList