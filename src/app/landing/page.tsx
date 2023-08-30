"use client";
import React, { useState } from "react";
import Image from "next/image";
import ClientOpinion from "../components/clientOpinionContainer/clientOpinion";
import Accordion from "../components/accordion/accordion";
import Select from "react-select";
import serviceImage1 from "../assets/services/service1.jpg";
import serviceImage2 from "../assets/services/service2.jpg";
import serviceImage3 from "../assets/services/service3.jpg";
import profileImage1 from "../assets/profiles/profile1.png";
import profileImage2 from "../assets/profiles/profile2.png";
import profileImage3 from "../assets/profiles/profile3.png";

function Landing(): JSX.Element {
    const faqData = [
        {
            question: "¿Cómo puedo reservar un espacio deportivo en línea?",
            answer: "Es simple. Inicia sesión en nuestra plataforma, elige el tipo de espacio que deseas reservar (cancha de fútbol, pista de tenis, etc.), selecciona la fecha y hora, y completa el proceso de reserva con el pago seguro.",
        },
        {
            question: "¿Puedo cancelar o modificar una reserva?",
            answer: "Sí, puedes realizar cambios en tus reservas. Accede a tu cuenta, ve a la sección de 'Mis Reservas' y selecciona la reserva que deseas modificar o cancelar. Ten en cuenta nuestras políticas de cancelación.",
        },
        {
            question:
                "¿Cómo puedo estar seguro de la calidad de los espacios reservados?",
            answer: "Trabajamos con instalaciones deportivas de alta calidad y confiables. Antes de ofrecer un espacio en nuestra plataforma, evaluamos su estado y comodidades para asegurarnos de que cumpla con nuestros estándares y tus expectativas.",
        },
        {
            question: "¿Qué opciones de pago están disponibles?",
            answer: "Aceptamos varias formas de pago, incluyendo tarjetas de crédito y débito. Nuestro sistema de pago en línea es seguro y encriptado para proteger tus datos financieros.",
        },
    ];

    const [city, setCity] = useState([]);

    const optionsCities = [
        { value: "Medellin", label: "Medellin" },
        { value: "Itagui", label: "Itagui" },
        { value: "Rionegro", label: "Rionegro" },
        { value: "Envigado", label: "Envigado" },
        { value: "Belen", label: "Belen" },
    ];

    const handleCityChange = async (
        selected: React.SetStateAction<never[]>
    ) => {
        // const { action } = selectaction;
        setCity(selected);
    };

    return (
        <div className="w-full h-full m-auto text-color-text-black font-inriasans">
            <section className="bg-banner py-[150px] bg-no-repeat bg-cover bg-center">
                <div className="max-w-[1020px] m-auto">
                    <h1 className="text-5xl text-center text-color-text-black font-bold">
                        ¡Reserva Tu Espacio Deportivo y Eleva Tu Juego!
                    </h1>
                    <p className="text-xl m-auto text-center max-w-2xl justify-center my-20 text-color-text-white">
                        Encuentra, reserva y disfruta de instalaciones
                        deportivas de primera clase en minutos.
                    </p>
                    <div className="border-2 rounded-lg m-auto py-2 bg-[#CDCDCD] justify-around flex items-center">
                        <Select
                            id="selectCity"
                            instanceId="selectCity"
                            isMulti
                            name="colors"
                            className="rounded-lg p-3 text-base w-[450px] font-inriasans"
                            classNamePrefix="select"
                            options={optionsCities}
                            placeholder="Ubicación"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    minHeight: "2.75rem",
                                }),
                            }}
                        />
                        <input
                            type="date"
                            placeholder="Fecha"
                            className="rounded-lg p-2 text-base h-12 w-80"
                        />
                        <input
                            type="button"
                            value="Buscar"
                            className="bg-color-button hover:bg-color-button-hover color w-40 h-12 rounded-lg text-color-text-white font-bold text-base transition-all ease-in-out cursor-pointer"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-color-bg py-36 max-w-[1200px] m-auto">
                <div className="flex justify-around">
                    <div className="w-[600px]">
                        <h3 className="text-2xl m-5 font-bold text-left">
                            Reserva de Canchas de Fútbol
                        </h3>
                        <p className="text-lg text-clip m-5 text-left">
                            Reserva canchas de fútbol en línea para partidos
                            amistosos o torneos.
                        </p>
                        <ul className="list-disc m-5">
                            <li className="text-lg m-2">
                                Variedad de tamaños disponibles.
                            </li>
                            <li className="text-lg m-2">Horarios flexibles</li>
                            <li className="text-lg m-2">
                                Sistema de pago seguro y confirmación
                                instantánea.
                            </li>
                        </ul>
                    </div>
                    <div className="w-[600px]">
                        <Image
                            src={serviceImage1}
                            alt="This is an image of the service"
                            width={600}
                            height={350}
                            className="bg-red-500"
                        />
                    </div>
                </div>
                <div className="flex justify-around my-36">
                    <div className="w-[600px]">
                        <Image
                            src={serviceImage2}
                            alt="This is an image of the service"
                            width={600}
                            height={350}
                            className="bg-red-500"
                        />
                    </div>
                    <div className="w-[600px]">
                        <h3 className="text-2xl ml-10 my-5 font-bold text-left">
                            Alquiler de Pistas de Tenis
                        </h3>
                        <p className="text-xl text-clip ml-10 my-5 text-left">
                            Encuentra y reserva pistas de tenis con facilidad.
                            Ya sea para un juego casual o entrenamiento
                            intensivo.
                        </p>
                        <ul className="list-disc ml-10 my-5">
                            <li className="text-lg m-2">
                                Selección de pistas en superficies diversas.
                            </li>
                            <li className="text-lg m-2">
                                Opciones de reserva por horas para adaptarse a
                                tu agenda.
                            </li>
                            <li className="text-lg m-2">
                                Calidad garantizada de las instalaciones.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="w-[600px]">
                        <h3 className="text-2xl m-5 font-bold text-left">
                            Espacios para Entrenamiento Personal
                        </h3>
                        <p className="text-xl text-clip m-5 text-left">
                            Descubre espacios ideales para tu entrenamiento
                            personalizado. Ya seas un atleta profesional o
                            simplemente quieras mantenerte en forma.
                        </p>
                        <ul className="list-disc m-5">
                            <li className="text-lg m-2">
                                Amplia variedad de gimnasios y centros de
                                entrenamiento.
                            </li>
                            <li className="text-lg m-2">
                                Filtros de búsqueda.
                            </li>
                            <li className="text-lg m-2">
                                Reserva de espacios privados.
                            </li>
                        </ul>
                    </div>
                    <div className="w-[600px]">
                        <Image
                            src={serviceImage3}
                            alt="This is an image of the service"
                            width={600}
                            height={350}
                            className="bg-red-500"
                        />
                    </div>
                </div>
            </section>
            <section className="py-28 bg-color-bg border-color-text-black border-2">
                <div className="max-w-[1020px] m-auto flex justify-between">
                    <ClientOpinion
                        name="Florence Abbott"
                        profilePictureSrc={profileImage1}
                        comment="Increíblemente conveniente. Reservar una cancha de tenis es pan comido ahora. Horarios flexibles y confirmación instantánea hacen que todo sea más fácil."
                    />
                    <ClientOpinion
                        name="Jackson McCormick"
                        profilePictureSrc={profileImage2}
                        comment="El sistema de reserva de gimnasios es genial. Encuentro fácilmente un lugar para entrenar, y la opción de espacios privados es perfecta."
                    />
                    <ClientOpinion
                        name="Antonio Douglas"
                        profilePictureSrc={profileImage3}
                        comment="¡Finalmente puedo organizar partidos de fútbol sin complicaciones! Reservar canchas es rápido, y la variedad de tamaños me permite elegir según nuestra cantidad de jugadores."
                    />
                </div>
            </section>
            <section className="py-28 bg-color-form-bg ">
                <div className="max-w-[1020px] m-auto">
                    <h2 className="text-4xl font-bold">FAQs</h2>
                    <div>
                        <div className="my-12">
                            {faqData.map((item, index) => (
                                <Accordion
                                    key={index}
                                    title={item.question}
                                    content={item.answer}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-28 bg-color-bg">
                <div className="max-w-[1020px] m-auto">
                    <h2 className="text-5xl text-center mb-28 ">
                        Encuentra Tu Lugar Perfecto para Jugar
                    </h2>
                    <div className="border-2 rounded-lg m-auto py-2 bg-[#CDCDCD] justify-around flex items-center">
                        <Select
                            id="selectCity"
                            instanceId="selectCity"
                            isMulti
                            name="colors"
                            className="rounded-lg p-2 text-base w-[450px] font-inriasans"
                            classNamePrefix="select"
                            options={optionsCities}
                            placeholder="Ubicación"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    minHeight: "2.75rem",
                                }),
                            }}
                        />
                        <input
                            type="date"
                            placeholder="Fecha"
                            className=" rounded-lg p-2 text-base h-12 w-80"
                        />
                        <input
                            type="submit"
                            value="Buscar"
                            className="bg-color-button hover:bg-color-button-hover color w-40 h-12 rounded-lg text-color-text-white font-bold text-base transition-all ease-in-out cursor-pointer"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Landing;
