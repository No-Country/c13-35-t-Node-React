import React from "react";
import styles from "./register.module.css"
import Image from "next/image";
import Link from "next/link";


interface RegisterProps { }

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <div className="flex flex-row mx-10 font-inriasans">
      {/* seccion izquierda (formulario y botones) */}
      <div className="w-424 h-625 flex-shrink-0 bg-color-form-bg">
        <div className="flex w-231 h-82 flex-col justify-center flex-shrink-0 bg-blue-500">
          <h2 className="text-black  font-semibold text-2xl leading-55 mt-7 ml-6">
            REGISTRATE
          </h2>
        </div>
        <div className="flex justify-around items-center gap-6 bg-red-700">
          <div className="flex justify-around items-center gap-2">
            <div className="flex flex-col items center">
              <span className="textNumeration1 flex w-6 h-6 justify-center items-center rounded-full bg-color-button text-white  font-semibold text-xs">
                1
              </span>
              <span className="text-black  font-semibold text-[0.625rem] leading-4">
                Información
              </span>
            </div>

            {/* pelotitas blancas */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div>
              <div className="flex flex-col items-center">
                <span className="textNumeration1 flex w-6 h-6 justify-center items-center rounded-full bg-white text-black  font-semibold text-xs">
                  2
                </span>
                <span className="text-black  font-semibold text-[0.625rem] leading-4">
                  Perfil
                </span>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-1 mt-2 bg-yellow-500">
          <div className="flex flex-col">
            <label
              htmlFor="nombreYapellido"
              className="text-black  font-semibold text-base ml-20"
            >
              Nombre y Apellido *
            </label>
            <input
              id="nombreYapellido"
              type="text"
              className="fflex items-center w-[333.854px] px-[27px] py-0 rounded-[20px] text-gray-700 outline-none border-2 border-color-form-bg focus:border-[#576702]"
            />
          </div>
          <div>
            <label
              className="text-black  font-semibold text-base leading-10 mx-11"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="flex items-center rounded-full mx-auto my-0.5 px-6 py-2  text-gray-700 outline-none border-2 border-color-form-bg focus:border-[#576702]"
            />
          </div>
          <div>
            <label
              className="text-black  font-semibold text-base leading-10 mx-11"
              htmlFor="teléfono"
            >
              Teléfono *
            </label>
            <input
              id="telefono"
              type="number"
              className="flex items-center rounded-full mx-auto my-0.5 px-6 py-2  text-gray-700 outline-none border-2 border-color-form-bg focus:border-[#576702]"
            />
          </div>
        </form>
        <div className="mt-4 text-right bg-green-500 ">
          <button className="rounded-full border-2 border-solid border-[#576702] bg-color-button text-white font-roboto text-md font-normal leading-[134.766%]  w-32 py-1.5 px-4 mr-20">
            <div className="flex justify-between">
              <div>Siguiente</div> &gt;
            </div>
          </button>
        </div>
        <div
          className="bg-blue-800 flex flex-row items-center justify-center gap-4
      "
        >
          <div className="w-20 h-0.5 bg-black mt-1"></div>
          <div>
            <Image
              src={"./emojione-monotone_soccer-ball.svg"}
              width={20}
              height={20}
              className="mt-1"
              alt={""}
            />
          </div>
          <div className="w-20 h-0.5 bg-black mt-1"></div>
        </div>
        <div className="mt-4 text-left bg-red-600">
          <button className="items-center rounded-full bg-white p-2 mt-4 border border-[#576702] text-[#576702] leading-8">
            <div className="flex content-between">
              <Image
                src={"./flat-color-icons_google.svg"}
                width={30}
                height={30}
                className="mr-0.2"
                alt={""}
              />
              <div>Continuar con Google</div>
            </div>
          </button>
          <div className="inline-flex justify-around bg-pink-600">
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
            src={"/public/fotoCancha.jpg"}
            alt="Imagen cancha"
            width={653}
            height={625}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;


