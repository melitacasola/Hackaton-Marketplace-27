'use client'

import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);

    return data; // Devuelve solo los datos, no un objeto
}