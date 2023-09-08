"use client";
import CardResult from "@/app/components/card/card-product";
import { getCanchas } from "@/app/services/canchas";
import useFiltersStore from "../../search/filtersState";
import { useEffect, useState } from "react";

interface cancha {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  reservada: boolean;
  deporte: string;
  valoracion: number;
}

const fetchData = async (
  deporte: string,
  ciudad: string,
  setCanchas: (data: cancha[]) => void
) => {
  try {
    const data = await getCanchas(deporte, ciudad);
    setCanchas(data);
  } catch (error) {
    console.error("Error al obtener canchas:", error);
  }
};


export default function Canchas() {
  const { deporte, setCanchas, ciudad, canchas } = useFiltersStore();

  useEffect(() => {
    fetchData(deporte, ciudad, setCanchas)
  }, [deporte, ciudad, setCanchas]);

  return (
    <>
      <div className="flex justify-between">
        <p>{canchas.length} resultados</p>
        <div className="flex">
          <p>Ordenar por:</p>
          <select name="" id="">
            <option value="">Más relevante</option>
            <option value="">Menor precio</option>
            <option value="">Mayor precio</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-9 max-w-5xl max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
        {canchas.map((cancha: cancha) => (
          <CardResult
            key={cancha.id}
            id={cancha.id}
            nombre={cancha.nombre}
            descripcion={cancha.descripcion}
            precio={cancha.precio}
            valoracion={cancha.valoracion}
          />
        ))}
      </div>
    </>
  );
}
