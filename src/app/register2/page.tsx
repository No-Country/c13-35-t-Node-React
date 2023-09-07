"use client";

import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { IoIosAlert } from "react-icons/io";

interface Register2Props {}

const Register2: React.FC<Register2Props> = (props) => {
    const router = useRouter(); //Agregado

    const [showPasswordRules, setShowPasswordRules] = useState(false);

    const togglePasswordRules = () => {
        setShowPasswordRules(!showPasswordRules);
    };

    const form = useRef<HTMLFormElement>(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            usuario: "",
            contraseña: "",
            confirmarContraseña: "",
        },
    });

    const sendEmail = () => {
        if (form.current) {
            emailjs
                .sendForm(
                    "service_703t9cg",
                    "template_ya20m5f",
                    form.current,
                    "l5gbij0EO5KK0gFQX"
                )
                .then((result) => {
                    console.log(result.text);
                })
                .catch((error) => {
                    console.log(error.text);
                });
        }
    };

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        sendEmail();

        router.push("/log-in");
    };

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
                            <span className="flex w-6 h-6 justify-center items-center rounded-full bg-white text-color-text-black  font-semibold text-xs">
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
                                <span className="flex w-6 h-6 justify-center items-center rounded-full bg-color-button text-white  font-semibold text-xs">
                                    2
                                </span>
                                <span className="text-black  font-semibold text-xs leading-4">
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
                    <div className="">
                        <label
                            htmlFor="usuario"
                            className="text-black text-left font-semibold text-base my-5"
                        >
                            Usuario *
                        </label>
                        <input
                            id="usuario"
                            type="text"
                            {...register("usuario", {
                                required: true,
                                minLength: 3,
                                maxLength: 20,
                                pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ0-9\s\-']+$/,
                            })}
                            className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                errors.usuario ? "border-red-700" : ""
                            }`}
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            name="username"
                        />

                        {errors.usuario?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener al menos 3 caracteres
                                </p>
                            </div>
                        )}
                        {errors.usuario?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El campo debe tener menos de 20 caracteres
                                </p>
                            </div>
                        )}
                        {errors.usuario?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    El usuario es incorrecto. Por favor,
                                    reingréselo.
                                </p>
                            </div>
                        )}
                        {errors.usuario?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    Falta completar el usuario
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="">
                        <label
                            className="text-black text-left font-semibold text-base my-5"
                            htmlFor="contraseña"
                        >
                            Contraseña *
                        </label>
                        <input
                            id="contraseña"
                            type="password"
                            {...register("contraseña", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                                pattern:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@\[\]^_{|}])[A-Za-z\d!#$%&()*+\/?@\[\]^_{|}]+$/,
                            })}
                            className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                errors.contraseña ? "border-red-700" : ""
                            }`}
                            onClick={togglePasswordRules}
                        />
                        {showPasswordRules && (
                            <div className="tooltip text-xs">
                                - Entre 6 y 10 caracteres. <br />
                                - Al menos una mayúscula. <br />
                                - Al menos una minúscula. <br />
                                - Al menos un número. <br />- Al menos un
                                caracter especial. Listado aceptado: ! # $ % & (
                                ) * + - /? @ [ \ ] ^ _ [ | ].
                            </div>
                        )}

                        {errors.contraseña?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña debe tener al menos 6
                                    caracteres
                                </p>
                            </div>
                        )}
                        {errors.contraseña?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña debe tener menos de 10
                                    caracteres
                                </p>
                            </div>
                        )}
                        {errors.contraseña?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña no cumple con las reglas. Por
                                    favor, ingrese una contraseña correcta.
                                </p>
                            </div>
                        )}
                        {errors.contraseña?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    Falta completar la contraseña
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <label
                            className="text-black text-left font-semibold text-base my-5"
                            htmlFor="confirmarContraseña"
                        >
                            Confirmar Contraseña *
                        </label>
                        <input
                            id="confirmarContraseña"
                            type="password"
                            {...register("contraseña", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                                pattern:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@\[\]^_{|}])[A-Za-z\d!#$%&()*+\/?@\[\]^_{|}]+$/,
                            })}
                            className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                errors.confirmarContraseña
                                    ? "border-red-700"
                                    : ""
                            }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                        />

                        {errors.confirmarContraseña?.type === "minLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña debe tener al menos 6
                                    caracteres
                                </p>
                            </div>
                        )}
                        {errors.confirmarContraseña?.type === "maxLength" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña debe tener menos de 10
                                    caracteres
                                </p>
                            </div>
                        )}
                        {errors.confirmarContraseña?.type === "pattern" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña no cumple con las reglas. Por
                                    favor, ingrese una contraseña correcta.
                                </p>
                            </div>
                        )}
                        {errors.confirmarContraseña?.type === "validate" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    La contraseña no coincide. Por favor,
                                    reingrese la contraseña.
                                </p>
                            </div>
                        )}
                        {errors.confirmarContraseña?.type === "required" && (
                            <div className="inline-flex justify-start items-center">
                                <IoIosAlert className=" text-[#B40000] mr-2" />
                                <p className="text-red-700">
                                    Falta confirmar la contraseña
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mt-4 text-right">
                        <button className="rounded-full w-full border-2 border-solid border-color-button bg-color-button text-white font-roboto text-md font-normal py-2 px-4 my-1 hover:bg-color-button-hover">
                            Registrate
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
                            <Link href="/log-in">
                                <span className="text-blue-500  font-normal text-base leading-14 ml-1">
                                    Inicia sesión
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* seccion derecha (imagen) */}

            <div className="flex bg-gray-100">
                <div className="bg-lightgray bg-cover bg-center relative">
                    <Image
                        src={"/fotoCancha.jpg"}
                        alt="Imagen cancha"
                        width={653}
                        height={625}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Register2;
