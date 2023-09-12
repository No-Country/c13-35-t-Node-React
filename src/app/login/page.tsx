"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLogin from "../../../public/ImageLogin.png";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IoIosAlert } from "react-icons/io";

interface LoginProps {}
const Login: React.FC<LoginProps> = (props) => {
    // const navigateTo = useNavigate();
    // const { setLogedUser, error, setError } = useContext(AppContext);

    // const [email, setEmail] = useState("");
    // const [contrasena, setContrasena] = useState("");

    // const [sending, setSending] = useState(false);
    // const [errors, setErrors] = useState([]);

    // const hasError = (name) => {
    //   const foundError = errors.find((error) => error.name === name);
    //   return foundError?.message;
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   const newErrors = [];

    //   const cleanEmail = email.trim();
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //   if (!email || !emailRegex.test(cleanEmail) || !contrasena) {
    //     newErrors.push({
    //       name: "email",
    //       message: "Email inválido.",
    //     });
    //   }

    //   if (contrasena.length < 8) {
    //     newErrors.push({
    //       name: "password",
    //       message: "La contraseña debe contener al menos 8 caracteres.",
    //     });
    //   }

    //   setErrors(newErrors);

    //   if (newErrors.length > 0) {
    //     return;
    //   }

    //   setSending(true);

    //   try {
    //     const response = await validateUser({ email, contrasena });

    //     const responseData = response?.data || {};
    //     const userData = buildUserData(responseData.dto);

    //     const firstLetter = email.charAt(0).toUpperCase();
    //     const username = email.split("@")[0];
    //     const logedUser = {
    //       userName: username,
    //       avatar: firstLetter,
    //       ...userData,
    //       ...responseData,
    //     };
    //     setLogedUser(logedUser);
    //     localStorage.setItem("logedUser", JSON.stringify(logedUser));
    //     setSending(false);
    //     navigateTo("/");
    //   } catch (error) {
    //     setError("Email y/o contraseña incorrectos");
    //     setSending(false);
    //   }
    const router = useRouter();
    const form = useRef<HTMLFormElement>(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async () => {
        router.push("/");
    };

    const [showPasswordRules, setShowPasswordRules] = useState(false);

    const togglePasswordRules = () => {
        setShowPasswordRules(!showPasswordRules);
    };

    return (
        <div className="flex flex-row font-inriasans h-full justify-center">
            {/* seccion izquierda (imagen) */}

            <div className="flex bg-gray-100 h-full overflow-hidden relative">
                <div className="bg-lightgray bg-cover bg-center w-full h-full">
                    <Image
                        src={ImageLogin}
                        alt="Imagen cancha"
                        width={833}
                        height={712}
                        className="object-cover"
                    />
                </div>
            </div>
            {/* seccion derecha  */}
            <div className="w-[604px] p-8 bg-color-form-bg flex-none">
                <div className="w-full h-82">
                    <h2 className=" text-color-text-black font-semibold text-2xl my-5 ml-8">
                        INGRESA A TU CUENTA
                    </h2>
                </div>
                <div className="m-auto w-[420px] mt-10">
                    <form
                        className="flex flex-col gap-1 my-5"
                        onSubmit={handleSubmit(onSubmit)}
                        ref={form}
                    >
                        <div className="my-3">
                            <label
                                htmlFor="username"
                                className="text-black text-left font-semibold text-base my-5"
                            >
                                Usuario *
                            </label>
                            <input
                                id="username"
                                type="text"
                                {...register("username", {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                    pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s\-']+$/,
                                })}
                                onPaste={(e) => e.preventDefault()}
                                className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                    errors.username
                                        ? "outline border-red-700 border-2"
                                        : ""
                                }`}
                                name="name"
                            />
                            {errors.username?.type === "minLength" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-[#B40000] border">
                                        El campo debe tener al menos 3
                                        caracteres
                                    </p>
                                </div>
                            )}
                            {errors.username?.type === "maxLength" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-red-700">
                                        El campo debe tener menos de 30
                                        caracteres
                                    </p>
                                </div>
                            )}
                            {errors.username?.type === "required" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-red-700">
                                        Falta completar el nombre de usuario
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="my-3">
                            <label
                                className="text-black text-left font-semibold text-base my-5"
                                htmlFor="contraseña"
                            >
                                Contraseña *
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 10,
                                    pattern:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@\[\]^_{|}])[A-Za-z\d!#$%&()*+\/?@\[\]^_{|}]+$/,
                                })}
                                className={`flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black focus:border ${
                                    errors.password ? "border-red-700" : ""
                                }`}
                                onClick={togglePasswordRules}
                            />
                            {showPasswordRules && (
                                <div className="tooltip text-xs">
                                    - Entre 6 y 10 caracteres. <br />
                                    - Al menos una mayúscula. <br />
                                    - Al menos una minúscula. <br />
                                    - Al menos un número. <br />- Al menos un
                                    caracter especial. Listado aceptado: ! # $ %
                                    & ( ) * + - /? @ [ \ ] ^ _ [ | ].
                                </div>
                            )}

                            {errors.password?.type === "minLength" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-red-700">
                                        La contraseña debe tener al menos 6
                                        caracteres
                                    </p>
                                </div>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-red-700">
                                        La contraseña debe tener menos de 10
                                        caracteres
                                    </p>
                                </div>
                            )}
                            {errors.password?.type === "pattern" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-red-700">
                                        La contraseña no cumple con las reglas.
                                        Por favor, ingrese una contraseña
                                        correcta.
                                    </p>
                                </div>
                            )}
                            {errors.password?.type === "required" && (
                                <div className="inline-flex justify-start items-center">
                                    <IoIosAlert className=" text-[#B40000] mr-2" />
                                    <p className="text-red-700">
                                        Falta completar la contraseña
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                type="submit"
                                className={`rounded-full border-2 border-solid border-color-button bg-color-button text-white font-inriasans text-xl font-normal w-full py-2 px-4 my-1 hover:bg-color-button-hover ${
                                    Object.keys(errors).length > 0
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={Object.keys(errors).length > 0}
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-center my-5">
                        <p className="text-black text-base font-normal">
                            {" "}
                            ¿Olvidaste tu contraseña?
                            <Link href="/login">
                                <span className="text-blue-500 font-normal text-lg leading-14 ml-3">
                                    Ingresa aquí
                                </span>
                            </Link>
                        </p>
                    </div>

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
                                ¿No tienes una cuenta?
                                <Link href="/register">
                                    <span className="text-blue-500  font-normal text-base leading-14 ml-1">
                                        Registrate
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
