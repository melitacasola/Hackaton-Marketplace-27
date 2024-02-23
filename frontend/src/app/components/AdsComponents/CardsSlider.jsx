"use client"

import Card from "./Card"
import { useFetchApi } from '@/app/services/useFetchApi';

const CardsSlider = () => {
    const urlApi = 'http://localhost:3200/api/v1/coders-stack'

    const { data, loading, error } = useFetchApi(urlApi);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <div>
        <Card card={data}/>
    </div>
  )
}

export default CardsSlider