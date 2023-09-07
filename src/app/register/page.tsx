"use client";

import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosAlert } from "react-icons/io";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
    const router = useRouter(); //Agregado

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const form = useRef<HTMLFormElement>(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit = async () => {
        try {
            const response = await fetch(
                "https://goolbooking-api.onrender.com/auth/registro",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                    }),
                }
            );

            if (response.ok) {
                // API request was successful, you can redirect or perform other actions here
                router.push("/register2");
            } else {
                // Handle the case where the API request failed
                console.error("API request failed");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]*$/;

    return (
        <div className="flex flex-row mx-44 font-inriasans h-full justify-center">
            {/* seccion izquierda (formulario y botones) */}
            <div className="w-[420px] h-full p-8 bg-color-form-bg">
                <div className="w-full h-82">
                    <h2 className=" text-color-text-black font-semibold text-2xl my-5 ml-6">
                        REGISTRATE
                    </h2>
                </div>
                <div className="flex justify-around items-center">
                    <div className="flex justify-around items-center gap-2 content-center">
                        <div className="flex flex-col items-center">
                            <span className="flex w-6 h-6 justify-center items-center rounded-full bg-color-button text-white  font-semibold text-xs">
                                1
                            </span>
                            <span className="text-black  font-semibold text-xs leading-4">
                                Información
                            </span>
                        </div>

                        {/* pelotitas blancas */}
                        <div className="flex flex-row justify-center mb-3 align-center gap-2">
                            <div className="m-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="6"
                                    viewBox="0 0 5 6"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2.5"
                                        fill="#F3F5F7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center mb-3 align-center gap-2">
                            <div className="m-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="6"
                                    viewBox="0 0 5 6"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2.5"
                                        fill="#F3F5F7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center mb-3 align-center gap-2">
                            <div className="m-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="6"
                                    viewBox="0 0 5 6"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2.5"
                                        fill="#F3F5F7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center mb-3 align-center gap-2">
                            <div className="m-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="6"
                                    viewBox="0 0 5 6"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2.5"
                                        fill="#F3F5F7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center mb-3 align-center gap-2">
                            <div className="m-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="6"
                                    viewBox="0 0 5 6"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2.5"
                                        fill="#F3F5F7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center mb-3 align-center gap-2">
                            <div className="m-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="6"
                                    viewBox="0 0 5 6"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2.5"
                                        fill="#F3F5F7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col items-center">
                                <span className="flex w-6 h-6 justify-center items-center rounded-full bg-white text-color-text-black  font-semibold text-xs">
                                    2
                                </span>
                                <span className="text-black font-semibold text-xs leading-4">
                                    Perfil
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    ref={form}
                    className="flex flex-col gap-1 mt-5"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="text-black text-left font-semibold text-base my-5"
                        >
                            Nombre y Apellido *
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", {
                                required: true,
                                minLength: 3,
                                maxLength: 30,
                                pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s\-']+$/,
                            })}
                            onPaste={(e) => e.preventDefault()}
                            className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                errors.name
                                    ? "outline border-red-700 border-2"
                                    : ""
                            }`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                        />
                        {errors.name?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000] border">
                                    El campo debe tener al menos 3 caracteres
                                </p>
                            </div>
                        )}
                        {errors.name?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener menos de 30 caracteres
                                </p>
                            </div>
                        )}
                        {errors.name?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    Falta completar el nombre y apellido
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <label
                            className="text-black text-left font-semibold text-base my-5"
                            htmlFor="email"
                        >
                            Email *
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: true,
                                pattern: emailPattern,
                            })}
                            className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                errors.email
                                    ? "outline border-red-700 border-2"
                                    : ""
                            }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                        />
                        {errors.email?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000]">
                                    Falta completar el mail
                                </p>
                            </div>
                        )}
                        {errors.email?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000]">
                                    El mail es incorrecto. Por favor,
                                    reingréselo siguiendo el formato
                                    mail@proveedor.xxx
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <label
                            className="text-black text-left font-semibold text-base my-5"
                            htmlFor="phone"
                        >
                            Teléfono *
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            {...register("phone", {
                                required: true,
                                pattern: phonePattern,
                            })}
                            inputMode="numeric"
                            className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                errors.phone
                                    ? "outline border-red-700 border-2"
                                    : ""
                            }`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            name="phone"
                        />
                        {errors.phone?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000]">
                                    Falta completar el teléfono
                                </p>
                            </div>
                        )}
                        {errors.phone?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-[#B40000]">
                                    El teléfono debe contener solo números
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mt-4 text-right">
                        <button
                            type="submit"
                            className={`rounded-full border-2 border-solid border-color-button bg-color-button text-white font-roboto text-md font-normal w-32 py-2 px-4 my-1 hover:bg-color-button-hover ${
                                Object.keys(errors).length > 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            disabled={Object.keys(errors).length > 0}
                        >
                            <div className="flex justify-between">
                                <p>Siguiente</p> &gt;
                            </div>
                        </button>
                    </div>
                </form>

                <div className="flex flex-row items-center justify-center gap-4 my-2">
                    <div className="h-0.5 bg-black mt-1 w-full"></div>
                    <div>
                        <Image
                            src={"./emojione-monotone_soccer-ball.svg"}
                            width={50}
                            height={50}
                            className="mt-1"
                            alt="soccer ball picture"
                        />
                    </div>
                    <div className="h-0.5 bg-black mt-1 w-full"></div>
                </div>
                <div className="mt-4 block m-auto">
                    <button className="flex justify-center rounded-full bg-white p-2 my-4 border-2 border-color-button  text-color-button leading-8 w-full ">
                        <div className="flex content-between">
                            <Image
                                src={"./flat-color-icons_google.svg"}
                                width={30}
                                height={30}
                                className="mr-1"
                                alt={""}
                            />
                            <div>Continuar con Google</div>
                        </div>
                    </button>
                    <div className="flex justify-center">
                        <p className="text-black  text-base font-normal leading-13.75">
                            {" "}
                            ¿Ya tienes una cuenta?
                            <Link href="/login">
                                <span className="text-blue-500  font-normal text-base leading-14 ml-1">
                                    Inicia sesión
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* seccion derecha (imagen) */}

            <div className="flex bg-gray-100 h-full overflow-hidden">
                <div className="bg-lightgray bg-cover bg-center relative">
                    <Image
                        src={"/fotoCancha.jpg"}
                        alt="Imagen cancha"
                        width={653}
                        height={600}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
