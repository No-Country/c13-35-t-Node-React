"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useFiltersStore from "../../search/filtersState";

export default function Filters() {
  const { setCiudad, setDeporte, setServicios, setMinimo, setMaximo } =
    useFiltersStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setCiudad(data.cuidad);
    setDeporte(data.deporte);
    setServicios(data.servicios);
    setMinimo(data.minimo);
    setMaximo(data.maximo);
  };

  const deleteAllFilter = () => {
    setCiudad("");
    setDeporte("");
    setServicios([]);
    setMinimo(0);
    setMaximo(0);
  };

  const deleteCityFilter = () => {
    setCiudad("");
  };

  return (
    <aside className="w-80" >
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="bg-color-button p-3 ">
          <h2>Canchas en Buenos Aires</h2>
          <button className="text-xs hover:underline" type="button" onClick={deleteAllFilter}>
            BORRAR FILTROS
          </button>
        </div>
        <div className="bg-color-text-black p-3 h-auto">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2 className="text-white">Cuidad</h2>
              <button
                className="text-white hover:underline"
                type="button"
                onClick={deleteCityFilter}
              >
                reset
              </button>
            </div>
            <select
              className="w-full px-2 py-1 rounded-md focus:outline-none"
              {...register("cuidad")}
            >
              <option className="" value="" defaultValue="">
                Seleccione la cuidad
              </option>
              <option value="buenos_aires">Buenos aires</option>
              <option value="cordoba">Córdoba</option>
              <option value="rosario">Rosario</option>
              <option value="mendoza">Mendoza</option>
              <option value="san_juan">San Juan</option>
            </select>
          </div>

          <div>
            <h2 className="text-white">Deporte</h2>
            <select
              className="w-full px-2 py-1 rounded-md"
              {...register("deporte")}
            >
              <option value="" defaultValue="">
                Seleccione el deporte
              </option>
              <option value="futbol">Futbol</option>
              <option value="tenis">Tenis</option>
              <option value="basquet">Basquet</option>
            </select>
          </div>
          <div className="">
            <h2 className="text-white">servicios</h2>
            <div className="flex flex-col">
              <div className="flex">
                <input
                  type="checkbox"
                  id="wifiCheckbox"
                  {...register("servicios")}
                  value="Wifi"
                />
                <label htmlFor="wifiCheckbox" className="text-white">
                  Wifi
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="cantinaCheckbox"
                  {...register("servicios")}
                  value="Cantina"
                />
                <label htmlFor="cantinaCheckbox" className="text-white">
                  Cantina
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="vestuarioCheckbox"
                  {...register("servicios")}
                  value="Vestuario"
                />
                <label htmlFor="vestuarioCheckbox" className="text-white">
                  Vestuario
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="cubiertaCheckbox"
                  {...register("servicios")}
                  value="Cubierta"
                />
                <label htmlFor="cubiertaCheckbox" className="text-white">
                  Cubierta
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="lucesCheckbox"
                  {...register("servicios")}
                  value="Luces"
                />
                <label htmlFor="lucesCheckbox" className="text-white">
                  Luces
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-white">Rango de precios</h2>
              <div className="flex justify-between gap-2">
                <input
                  type="number"
                  placeholder="minimo"
                  className="w-full rounded-md px-2 py-1 focus:outline-none"
                  {...register("minimo", {
                    max: 9999999999,
                    min: 0,
                    maxLength: 9999999999,
                  })}
                />
                <input
                  type="number"
                  placeholder="maximo"
                  className="w-full rounded-md px-2 py-1 focus:outline-none"
                  {...register("maximo", {
                    max: 9999999999,
                    min: 0,
                    maxLength: 9999999999,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-color-text-black flex items-center justify-center p-2">
          <button
            className="cursor-pointer bg-[#D9D9D9] w-3/4 py-1 rounded-md"
            type="submit"
          >
            Filtrar
          </button>
        </div>
      </form>
    </aside>
  );
}
