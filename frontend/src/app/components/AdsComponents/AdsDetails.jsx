'use client'

import { useFetchApi } from "@/app/services/useFetchApi"
import CardsSlider from "./CardsSlider"
import { usePathname } from "next/navigation"


const AdsDetails = () => {
    const pathname = usePathname().split('/')

    const { ads, loading, error } = useFetchApi('http://localhost:3200/api/v1/metacoders/' + pathname[2])
    
    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
            <section className="m-20 flex row gap-x-8">
                <article>
                    <p></p>
                </article>
                <article>
                    <h3 className="text-start text-5xl font-semibold ">Portfolio</h3>
                    <h4 className="text-start text-3xl font-semibold my-6">nombre y apellido</h4>
                    <p className="text-start text-2xl font-semibold my-6">correo electronico</p>
                    <p className="text-start text-2xl font-semibold my-6">telefono</p>
                    <p className="text-start text-2xl font-semibold my-6">ubicacion</p>
                </article>
            </section>
            <p className="mx-24 text-center text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mauris eros. Maecenas dictum mattis neque sit amet fermentum. Suspendisse tempor mattis tempor. Nulla facilisi. Donec vel leo sit amet mauris consectetur scelerisque. Nunc sit amet orci hendrerit, finibus magna a, viverra urna. Nunc vestibulum leo at metus auctor congue. In quis lobortis metus.</p>

            <section className="m-14">
                <CardsSlider />
            </section>

        </>
    )
}

export default AdsDetails
