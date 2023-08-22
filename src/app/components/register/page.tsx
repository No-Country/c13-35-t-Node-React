import React from "react";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <div className="flex justify-around items-center">
      <div className="w-424 h-627 flex-shrink-0 bg-color-form-bg rgba(87, 103, 2, 0.35) md:w-1/2 lg:w-1/3">
        <div className="flex w-231 h-82 flex-col justify-center flex-shrink-0">
          <h2 className=" text-black font-inria-sans font-semibold text-26 leading-55 font-Inria Sans, sans-serif">
            {/* insertar tipografia correctamente */}
            REGISTRATE
          </h2>
        </div>
        <form className="flex w-334 flex-col justify-center items-start gap-13 p-2">
          <div className="mb-7">
            <label
              className="text-[#191414] text-w-160.729 text-sm font-normal leading-55 block"
              htmlFor="nombreYapellido"
            >
              Nombre y Apellido *
            </label>
            <input
              id="nombreYapellido"
              type="text"
              className="flex w-333 pr-52 py-0 pl-6 items-center
            rounded-2xl bg-gray-100 placeholder-gray-400"
              placeholder="Nombre y Apellido"
            />
          </div>
          <div className="mb-7">
            <label
              className="text-[#191414] text-w-160.729 text-sm font-normal leading-55 block"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="flex w-333 pr-52 py-0 pl-6 items-center
            rounded-2xl bg-gray-100 placeholder-gray-400"
              placeholder="correo@correo.com"
            />
          </div>
          <div className="mb-7">
            <label
              className="text-[#191414] text-w-160.729 text-sm font-normal leading-55 block"
              htmlFor="telefono"
            >
              Teléfono *
            </label>
            <input
              id="telefono"
              type="number"
              className="flex w-333 pr-52 py-0 pl-6 items-center
            rounded-2xl bg-gray-100 placeholder-gray-400"
              placeholder="telefono"
            />
          </div>
        </form>
        <button className="w-142 h-40 text-white font-inria text-base font-medium bg-opacity-13 bg-[#576702] rounded-2xl px-8 py-1 border-1px border-solid border-[#576702] hover:bg-[#3f4a05] transition-colors duration-300 border:transparent">
          className="w-142 h-40 flex-shrink-0 rounded-2xl border border-solid
          border-1px border- bg-gray-700" Siguiente &gt;{" "}
        </button>

        <button>Continuar con Google</button>
      </div>
      <div className="w-653 h-625px flex-shrink-0 bg-gray-100 md:w-1/2 lg:w-2/3">
        <h1>imagen o algo</h1>
      </div>
    </div>
  );
};

export default Register;
