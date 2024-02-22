"use client"

import { useEffect, useState } from 'react';
import AdsComponent from "./AdsComponent"



const AdsList = () => {

   /* let ads_client = [
        {
        "id": "01",
        "name": "JUAN", 
        "age" : 25,  
        "profession":"Developer",
        "advertisement":"miprofiolllesta en linkedin pasate a verlos",
    },
    {
        
        "id": "04",
        "name": "TANIA",
        "age" :30,
        "profession":"Designer",
        "advertisement":"Busco un trabajo en una empresa que me permita crecer como diseñadora."
    
    },
    {
        "id": "05",
        "name": "PEDRO",
        "age" :45,
        "profession":"Manager", 
        "advertisement":"Estoy buscando un puesto para mi nuevo equipo. Me interesa trabajar con gente joven y con experiencia."
    }
    ]*/

    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchAds = async () => {
        try {
            const response = await fetch('http://localhost:3200/api/v1/coders-stack')
            const data = await response.json()
            console.log(data);
            setAds(data.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }
    useEffect(() => {
       
        fetchAds()
    }, [])



    return (
        <div>
            <AdsComponent ads={ads}/>
        </div>
    )
}

export default AdsList