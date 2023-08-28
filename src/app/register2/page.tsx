import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Register2Props {}

const Register2: React.FC<Register2Props> = (props) => {
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
            <div className="flex flex-row justify-center align-center gap-2">
              <div className="m-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2.5" fill="#F3F5F7" />
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
              className="flex items-center w-full px-5 py-2 rounded-full text-gray-700 outline-none focus:border-black"
              required
            />
          </div>
        </form>
        <div className="mt-4 text-right">
          <button className="rounded-full w-full border-2 border-solid border-color-button bg-color-button text-white font-roboto text-md font-normal py-2 px-4 my-1">
            Registrate
          </button>
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

export default Register2;
