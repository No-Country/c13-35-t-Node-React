/* import React from "react";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <div className="flex justify-around items-center ml-10">
      <div className="w-26.5 h-39.2 h-screen flex-shrink-0 bg-color-form-bg rgba(87, 103, 2, 0.35) md:w-1/2 lg:w-1/3 ml-20">
        <div className="flex w-14,44 h-5,125 flex-col justify-center flex-shrink-0">
          <h2 className=" text-black font-inria-sans font-semibold text-26 leading-55 font-Inria Sans, sans-serif pl-10 pt-6 pb-10">
            REGISTRATE
          </h2>
        </div>
        <div className="relative w-2 h-2  ">
          <div className="flex justify-around items-center ">
            <div className="w-1 h-2 bg-opacity-13 bg-[#576702] rounded-full px-4 py-4 border-1px border-solid border-[#576702] flex items-center justify-center text-white">
              <span className="text-sm font-semibold">1</span>
            </div>

            <div className="w-1 h-2 bg-white flex items-center justify-cente px-1 py-1 rounded-full"></div>

            <div className="w-1 h-2 bg-white flex items-center justify-cente px-1 py-1 rounded-full"></div>

            <div className="w-1 h-2 bg-white flex items-center justify-cente px-1 py-1 rounded-full"></div>

            <div className="w-1 h-2 bg-white flex items-center justify-cente px-1 py-1 rounded-full"></div>

            <div className="w-1 h-2 bg-white flex items-center justify-cente px-1 py-1 rounded-full"></div>

            <div className="w-1 h-2 bg-white flex items-center justify-cente px-1 py-1 rounded-full"></div>

            <div className="w-1 h-2 bg- px-4 py-4 border-1px border-solid border-white bg-white rounded-full flex items-center justify-center text-black">
              <span className="text-sm font-semibold">2</span>
            </div>
          </div>
        </div>
        <form className="flex w-21 flex-col justify-center items-start gap-13 p-2">
          <div className="mb-7">
            <label
              className="text-[#191414] text-w-160.729 text-sm font-normal leading-55 block pl-8 mb-1 "
              htmlFor="nombreYapellido"
            >
              Nombre y Apellido *
            </label>
            <input
              id="nombreYapellido"
              type="text"
              className="flex w-25,25 h-0,625 py-1 pl-8 items-center
            rounded-2xl bg-gray-100 placeholder-gray-400 ml-5"
              placeholder="Nombre y Apellido"
            />
          </div>
          <div className="mb-7">
            <label
              className="text-[#191414] text-w-160.729 text-sm font-normal leading-55 block pl-8 mb-1 "
              htmlFor="email"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="flex w-25,25 h-0,625 py-1 pl-8 items-center
            rounded-2xl bg-gray-100 placeholder-gray-400 ml-5"
              placeholder="correo@correo.com"
            />
          </div>
          <div className="mb-2">
            <label
              className="text-[#191414] text-w-160.729 text-sm font-normal leading-55 block pl-8 mb-1 "
              htmlFor="teléfono"
            >
              Teléfono *
            </label>
            <input
              id="telefono"
              type="number"
              className="flex w-25,25 h-0,625 py-1 pl-8 items-center
            rounded-2xl bg-gray-100 placeholder-gray-400 ml-5"
              placeholder="telefono"
            />
          </div>
        </form>
        <button className="w-8,8 h-2,5 text-white font-iniria text-base font-medium bg-opacity-13 bg-[#576702] rounded-2xl px-8 py-1 border-1px border-solid border-[#576702] hover:bg-[#3f4a05] transition-colors duration-300 border:transparent block mt-1 ml-40 ">
          Siguiente &gt;
        </button>
        <div className="flex justify-around items-center mt-10">
          <div className="w-24 h-0.5 bg-black"></div>
          <div className="w-10 h-10">
            <img src="\public\emojione-monotone_soccer-ball.svg" />
          </div>
          <div className="w-24 h-0.5 bg-black"></div>
        </div>
        <button className="w-8,8 h-2,5 block bg-white rounded-2xl px-8 py-1 border-1px border-solid absolute m-20  text-[#576702]">
          Continuar con Google
        </button>
      </div>
      <div className="h-screen flex-shrink-0 bg-gray-100 md:w-1/2 lg:w-2/3 mr-20"></div>
    </div>
  );
};

export default Register;
 */


import React from "react";
import styles from "./register.module.css"
import Image from "next/image";

interface RegisterProps { }

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorIzquierda}>
        <div className={styles.contenedorTitle}>
          <h2 className={styles.title}>
            REGISTRATE
          </h2>
        </div>
        <div className={styles.contenedorPelotitas}>
          <div className={styles.contenedorPelotitas2}/* "flex justify-around items-center " */>
            <div className={styles.textInformation}>

              <span className={styles.textNumeration}>1</span>
              <span className={styles.informationModal}>Informacion</span>
            </div>


            <div className={styles.pelotitaBlanca}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
            </svg></div>

            <div className={styles.pelotitaBlanca}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
            </svg></div>

            <div className={styles.pelotitaBlanca}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
            </svg></div>

            <div className={styles.pelotitaBlanca}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
            </svg></div>

            <div className={styles.pelotitaBlanca}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
            </svg></div>

            <div className={styles.pelotitaBlanca}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
            </svg></div>

            <div className={styles.pelotitaVerde}>
              <div className={styles.textInformation}>
                <span className={styles.textNumeration}>2</span>
                <span className={styles.informationModal}>Perfil</span>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.inputContainer} >
            <label
              htmlFor="nombreYapellido"
              className={styles.label}
            >
              Nombre y Apellido *
            </label>
            <input
              id="nombreYapellido"
              type="text"
              className={styles.input}

              placeholder=""
            />
          </div>
          <div className={styles.inputContainer}>
            <label
              className={styles.label}
              htmlFor="email"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}

              placeholder=""
            />
          </div>
          <div className={styles.inputContainer}>
            <label
              className={styles.label}
              htmlFor="teléfono"
            >
              Teléfono *
            </label>
            <input
              id="telefono"
              type="number"
              className={styles.input}
              placeholder=""
            />
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <div className={styles.botonConteindo}>
              <div>
                Siguiente
              </div>   &gt;
            </div>
          </button>
        </div>
        <div className={styles.containerDeAbajo} >
          <div className={styles.linea} ></div>
          <div >
            <Image src={"./emojione-monotone_soccer-ball.svg"} width={30} height={30} />
          </div>
          <div className={styles.linea} ></div>
        </div>
        <button >
          Continuar con Google
        </button>
      </div>
      <div ></div>
    </div >
  );
};

export default Register;