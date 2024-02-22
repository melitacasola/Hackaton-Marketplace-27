import CardsSlider from "./CardsSlider"


const AdsDetails = () => {
    return (
        <>
            <section className="m-20 flex row gap-x-8">
                <article>
                    <p>aca iria una imagen</p>
                </article>
                <article>
                    <h3 className="text-start text-3xl font-semibold ">Portfolio</h3>
                    <h4 className="text-start text-2xl font-semibold my-6">nombre y apellido</h4>
                    <p className="text-start text-base font-semibold my-6">correo electronico</p>
                    <p className="text-start text-base font-semibold my-6">telefono</p>
                    <p className="text-start text-base font-semibold my-6">ubicacion</p>
                </article>
            </section>
            <p className="mx-8 text-center font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mauris eros. Maecenas dictum mattis neque sit amet fermentum. Suspendisse tempor mattis tempor. Nulla facilisi. Donec vel leo sit amet mauris consectetur scelerisque. Nunc sit amet orci hendrerit, finibus magna a, viverra urna. Nunc vestibulum leo at metus auctor congue. In quis lobortis metus.</p>

            <section className="m-14">
                <CardsSlider />
            </section>

        </>
    )
}

export default AdsDetails
