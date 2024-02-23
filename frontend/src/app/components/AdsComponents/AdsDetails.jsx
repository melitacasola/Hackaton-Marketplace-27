'use client'

import { useFetchApi } from "@/app/services/useFetchApi"
import CardsSlider from "./CardsSlider"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";


const AdsDetails = () => {
    const pathname = usePathname().split('/')

    const { data, loading, error } = useFetchApi('http://localhost:3200/api/v1/metacoders/' + pathname[2])
    
    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
            <div className="flex flex-row mt-20 justify-center">

                <FaCheckCircle className="text-text-color w-12 h-12 mr-6"/><h3 className="text-center  text-5xl font-semibold ">Portfolio</h3>
            </div>
            <section className="mx-20 flex row gap-x-8">
                <article>
                    <Image 
                    src={data.client_img}
                    alt={`picture to ${data.client_firstname} ${data.client_lastname}`}
                    width='300'
                    height='300'
                    className="rounded-full"/>
                </article>
                <article className="px-24">
                    <h3 className="text-start text-4xl font-bold mt-12">{data.client_firstname} {data.client_lastname}</h3>
                    <div className="flex flex-row items-center">
                        <CiMail className="w-10 h-10 mr-6 font-semibold"/>

                        <p className="text-start text-2xl font-semibold my-6">{data.contact_mail}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <FaPhone className="w-8 h-8 mr-6 font-semibold"/>

                        <p className="text-start text-2xl font-semibold my-6">{data.contact_num}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <ImLocation className="w-10 h-10 mr-6 font-semibold"/>
                        <p className="text-start text-2xl font-semibold my-6">{data.location}</p>
                    </div>
                </article>
            </section>
            <p className="mx-24 my-16 text-center text-3xl font-semibold">{data.client_description}</p>

            <section className="m-14">
                <CardsSlider />
            </section>

        </>
    )
}

export default AdsDetails
