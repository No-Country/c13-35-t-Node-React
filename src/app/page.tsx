"use client";
import { useRouter } from "next/navigation";
import React, {
    useState,
    ReactNode,
    useEffect,
    FunctionComponent,
} from "react";
import Image from "next/image";
import Select, {
    components,
    SingleValueProps,
    OptionProps,
} from "react-select";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
    DayValue,
    RenderInputProps,
} from "@hassanmojab/react-modern-calendar-datepicker";
import ClientOpinion from "./components/clientOpinionContainer/clientOpinion";
import Accordion from "./components/accordion/accordion";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import axios from "axios";
import { dividerClasses } from "@mui/material";

const CustomOption: React.FC<OptionProps<any>> = ({ innerProps, label }) => (
    <div className="m-3" {...innerProps}>
        {label}
    </div>
);

const CustomSingleValue: React.FC<SingleValueProps<any>> = ({
    children,
    ...props
}) => (
    <components.SingleValue {...props}>
        <div className="inline-flex justify-start items-center">
            <FaLocationDot className="mr-2 text-color-button text-xl" />
            {children}
        </div>
    </components.SingleValue>
);

type CityOption = {
    value: string;
    label: string;
};

export default function Home() {
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

    const [selectedCity, setSelectedCity] = React.useState<CityOption | null>(
        null
    );

    const handleChange = (selectedOption: CityOption | null) => {
        setSelectedCity(selectedOption);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.type = "date";
    };

    // Franco, funcionalidad.
    const [cities, setCities] = useState<{ value: string; label: string }[]>(
        []
    );

    const router = useRouter();

    const handleSearch = () => {
        if (selectedCity) {
            router.push(`/search?city=${selectedCity.value}`);
        } else {
        }
    };

    interface CityData {
        ciudad: {
            nombre: string;
        };
    }

    const cityMapping: { [key: string]: string } = {
        buenos_aires: "Buenos Aires",
        cordoba: "Córdoba",
        mendoza: "Mendoza",
        rosario: "Rosario",
        san_juan: "San Juan",
    };

    useEffect(() => {
        axios
            .get("https://goolbooking-api.onrender.com/api/fields?ciudad")
            .then((response) => {
                const citiesData: CityData[] = response.data;

                const cityOptions = citiesData.map((city) => ({
                    value: city.ciudad.nombre,
                    label:
                        cityMapping[city.ciudad.nombre] || city.ciudad.nombre,
                }));

                const limitedCityOptions = cityOptions.slice(0, 5);

                setCities(limitedCityOptions);
            })
            .catch((error) => {
                console.error("Error al obtener las ciudades:", error);
            });
    }, []);

    const [selectedDay, setSelectedDay] = useState<DayValue | null>(null); // Specify the type as DayValue | null

    const formatInputValue = () => {
        if (!selectedDay) return "";
        return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;
    };

    const renderCustomInput: FunctionComponent<RenderInputProps> = ({
        ref,
    }) => (
        <div className="inline-flex justify-start items-center">
            <input
                readOnly
                ref={ref as React.RefObject<HTMLInputElement>} // Necessary
                placeholder="Fecha"
                value={
                    selectedDay
                        ? `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
                        : ""
                }
                style={{
                    textAlign: "left",
                    padding: "12px",
                    paddingLeft: "40px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    color: "#191414",
                    width: "350px",
                    height: "42px",
                }}
                className="my-custom-input-class"
            />
            <FaCalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-color-button" />
        </div>
    );

    const handleDateChange = (date: DayValue | null) => {
        setSelectedDay(date);
    };

    return (
        <div className="w-full h-full m-auto text-color-text-black font-inriasans">
            <section className="bg-banner py-[150px] bg-no-repeat bg-cover bg-center">
                <div className="max-w-[1020px] m-auto">
                    <h1
                        className="text-5xl text-center text-color-text-white font-bold"
                        style={{
                            textShadow: `-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black`,
                        }}
                    >
                        ¡Reserva Tu Espacio Deportivo y Eleva Tu Juego!
                    </h1>
                    <p
                        className="text-xl m-auto text-center max-w-2xl justify-center my-20 text-color-text-white"
                        style={{
                            textShadow: `-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black`,
                        }}
                    >
                        Encuentra, reserva y disfruta de instalaciones
                        deportivas de primera clase en minutos.
                    </p>
                    <div className="border-2 rounded-lg m-auto p-0 bg-[#CDCDCD] justify-around flex items-center">
                        <Select
                            id="selectCity"
                            instanceId="selectCity"
                            name="colors"
                            className="rounded-lg p-3 text-base w-[450px] font-inriasans"
                            classNamePrefix="select"
                            options={cities}
                            placeholder={
                                <div className="inline-flex justify-start items-center">
                                    <FaLocationDot className="mr-2 text-color-button text-xl" />
                                    Ubicación
                                </div>
                            }
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    cursor: "pointer",
                                    minHeight: "2.75rem",
                                }),
                            }}
                            value={selectedCity}
                            onChange={handleChange}
                            components={{
                                Option: CustomOption,
                                SingleValue: CustomSingleValue,
                            }}
                        />

                        <div className="relative inline-flex justify-start items-center transition-all duration-300 ease-in-out">
                            <div className="relative">
                                <DatePicker
                                    value={selectedDay}
                                    onChange={handleDateChange}
                                    renderInput={renderCustomInput}
                                    formatInputText={formatInputValue}
                                    inputPlaceholder="Fecha"
                                    shouldHighlightWeekends
                                    colorPrimary="#576702"
                                    calendarClassName="custom-calendar"
                                    calendarTodayClassName="custom-today-day"
                                    inputClassName=" absolute pl-10 z-[-1] "
                                />
                            </div>
                        </div>

                        <input
                            type="button"
                            value="BUSCAR"
                            className="bg-color-button hover:bg-color-button-hover color w-40 h-12 rounded-lg text-color-text-white font-bold text-base transition-all ease-in-out cursor-pointer"
                            onClick={handleSearch}
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
                    <div className="w-[600px] h-[350px] overflow-hidden relative rounded-md">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
                                alt="This is an image of the service"
                                width={600}
                                height={350}
                                className="rotate-90 origin-center transform"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-around my-36">
                    <div className="w-[600px] h-[350px] overflow-hidden relative rounded-md">
                        <Image
                            src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="This is an image of the service"
                            width={600}
                            height={350}
                            className=""
                        />
                    </div>
                    <div className="w-[600px] ">
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
                    <div className="w-[600px] h-[350px] overflow-hidden relative rounded-md">
                        <Image
                            src="https://images.pexels.com/photos/8941650/pexels-photo-8941650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="This is an image of the service"
                            width={600}
                            height={350}
                            className=""
                        />
                    </div>
                </div>
            </section>
            <section className="py-28 border-color-text-black border-2 bg-usercomments">
                <div className="max-w-[1020px] m-auto flex justify-between">
                    <ClientOpinion
                        name="Valentina Rodríguez"
                        profilePictureSrc="https://images.unsplash.com/photo-1615912021740-c4290248ea76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                        comment="Increíblemente conveniente. Reservar una cancha de tenis es pan comido ahora. Horarios flexibles y confirmación instantánea hacen que todo sea más fácil."
                    />
                    <ClientOpinion
                        name="Alejandro González"
                        profilePictureSrc="https://images.unsplash.com/photo-1641280173256-0ac1b2f4cd78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                        comment="El sistema de reserva de gimnasios es genial. Encuentro fácilmente un lugar para entrenar, y la opción de espacios privados es perfecta."
                    />
                    <ClientOpinion
                        name="Diego Martínez"
                        profilePictureSrc="https://images.unsplash.com/photo-1602339786708-26ad0b0aeedb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                        comment="¡Finalmente puedo organizar partidos de fútbol sin complicaciones! Reservar canchas es rápido, y la variedad de tamaños me permite elegir según nuestra cantidad de jugadores."
                    />
                </div>
            </section>
            <section
                className="py-28 bg-center bg-cover "
                style={{
                    backgroundImage: `url("../assets/FAQ.png")`,
                }}
            >
                <div className="max-w-[1020px] m-auto border-2 border-color-button p-12 bg-white">
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
            <section
                className="py-28 bg-color-bg bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("../assets/bg-search.png")`,
                }}
            >
                <div className="max-w-[1020px] m-auto">
                    <h2
                        className="text-5xl text-center mb-28 text-white"
                        style={{
                            textShadow: `-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black`,
                        }}
                    >
                        Encuentra Tu Lugar Perfecto para Jugar
                    </h2>
                    <div className="border-2 rounded-lg m-auto p-0 bg-[#CDCDCD] justify-around flex items-center">
                        <Select
                            id="selectCity"
                            instanceId="selectCity"
                            name="colors"
                            className="rounded-lg p-3 text-base w-[450px] font-inriasans"
                            classNamePrefix="select"
                            options={cities}
                            placeholder={
                                <div className="inline-flex justify-start items-center">
                                    <FaLocationDot className="mr-2 text-color-button text-xl" />
                                    Ubicación
                                </div>
                            }
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    cursor: "pointer",
                                    minHeight: "2.75rem",
                                }),
                            }}
                            value={selectedCity}
                            onChange={handleChange}
                            components={{
                                Option: CustomOption,
                                SingleValue: CustomSingleValue,
                            }}
                        />

                        <div className="relative inline-flex justify-start items-center transition-all duration-300 ease-in-out">
                            <div className="relative">
                                <DatePicker
                                    value={selectedDay}
                                    onChange={handleDateChange}
                                    renderInput={renderCustomInput}
                                    formatInputText={formatInputValue}
                                    inputPlaceholder="Fecha"
                                    shouldHighlightWeekends
                                    colorPrimary="#576702"
                                    calendarClassName="custom-calendar"
                                    calendarTodayClassName="custom-today-day"
                                    inputClassName=" absolute pl-10 z-[-1] "
                                />
                            </div>
                        </div>
                        <input
                            type="button"
                            value="BUSCAR"
                            className="bg-color-button hover:bg-color-button-hover color w-40 h-12 rounded-lg text-color-text-white font-bold text-base transition-all ease-in-out cursor-pointer"
                            onClick={handleSearch}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
