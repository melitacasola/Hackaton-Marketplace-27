'use client'
import { useState, useEffect } from "react";
import AdsComponent from "./AdsComponent"
import useFetch from "@/services/fetchApi";



const AdsList = () => {
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchAds = async () => {
        try {
            const response = await fetch('http://localhost:3200/api/v1/metacoders')
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