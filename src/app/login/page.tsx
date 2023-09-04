import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLogin from "../../../public/ImageLogin.png"
import { useContext, useState } from "react";


const Login = () => {
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
    
  return (
    <div className="flex flex-row mx-44 font-inriasans h-full justify-center">
        {/* seccion izquierda (imagen) */}

        <div className="flex bg-gray-100">
        <div className="bg-lightgray bg-cover bg-center relative">
          <Image
            src={ImageLogin}
            alt="Imagen cancha"
            width={833}
            height={712}
          />
        </div>
      </div>
      {/* seccion derecha  */}
      <div className="w-[420px] h-full p-8 bg-color-form-bg">
        <div className="w-full h-82">
          <h2 className=" text-color-text-black font-semibold text-2xl my-5 ml-6">
            INGRESA A TU CUENTA
          </h2>
        </div>
       
        <form className="flex flex-col gap-1 mt-5">
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
              className="flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none  focus:border-black"
              required
              
            />
          </div>
          <div>
            <label
              className="text-black text-left font-semibold text-base my-5"
              htmlFor="contraseña"
            >
              Contraseña *
            </label>
            <input
              id="contraseña"
              type="password"
              className="flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black"
              required
            />
          </div>
  
        </form>
        <div className="mt-4 text-right">
          <button className="rounded-full w-full border-2 border-solid border-color-button bg-color-button text-white font-roboto text-md font-normal py-2 px-4 my-1">
            Ingresar
          </button>
        </div>
        <div className="flex justify-center">
            <p className="text-black  text-base font-normal leading-13.75">
              {" "}
              ¿Olvidaste tu contraseña?
              <Link href="/log-in">
                <span className="text-blue-500  font-normal text-base leading-14 ml-1">
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
              <Link href="/registrate">
                <span className="text-blue-500  font-normal text-base leading-14 ml-1">
                  Registrate
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Login
