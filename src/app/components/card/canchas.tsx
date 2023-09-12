"use client";
import CardResult from "@/app/components/card/card-product";
import { getCanchas } from "@/app/services/canchas";
import useFiltersStore from "../../search/filtersState";
import { useEffect, useState } from "react";
import SkeletonArticle from "./skeleton";
import Pagination from "@mui/material/Pagination";

interface cancha {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  reservada: boolean;
  deporte: string;
  valoracion: number;
}

export default function Canchas() {
  const { deporte, setCanchas, ciudad, canchas, minimo, maximo, servicios } =
    useFiltersStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [orden, setOrden] = useState("relevante");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const canchasOrdenadas = [...canchas];
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const data = await getCanchas(deporte, ciudad);

        
        // Verifica si minimo y maximo están presentes y son números válidos
        let canchasFiltradas = data.filter((cancha: any) => {
          const precio = parseFloat(cancha.precio);
          const minimoNumero = parseInt(minimo);
          const maximoNumero = parseInt(maximo);
        
          return (
            (!isNaN(minimoNumero) ? precio >= minimoNumero : true) &&
            (!isNaN(maximoNumero) ? precio <= maximoNumero : true)
          );
        });

        if (servicios.length > 0) {
          canchasFiltradas = canchasFiltradas.filter((cancha: any) => {
            const serviciosCancha = cancha.servicios && Array.isArray(cancha.servicios)
              ? cancha.servicios.map((servicio: any) => servicio.toLowerCase())
              : [];
        
            // Verifica si al menos uno de los servicios seleccionados está presente en serviciosCancha
            return servicios.some((servicio: any) =>
              serviciosCancha.includes(servicio.toLowerCase())
            );
          });
        }
        

        setTotalResults(canchasFiltradas.length);
        const paginatedData = canchasFiltradas.slice(startIndex, endIndex);
        setCanchas(paginatedData);
        setLoading(false);
        setError("");
      } catch (error) {
        setError("El tipo de cancha no fue encontrada");
        setLoading(false);
      }
    };

    if (!error) {
      fetchData();
      setError("");
    }
  }, [deporte, ciudad, setCurrentPage, currentPage, minimo, maximo, servicios]);

  const ordenComparators: { [key: string]: (a: any, b: any) => number } = {
    relevante: (a, b) => b.valoracion - a.valoracion,
    menorPrecio: (a, b) => a.precio - b.precio,
    mayorPrecio: (a, b) => b.precio - a.precio,
  };

  canchasOrdenadas.sort(ordenComparators[orden]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <p>{totalResults} resultados</p>
        <div className="flex">
          <p>Ordenar por:</p>
          <select
            name="orden"
            id="orden"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="relevante">Más relevante</option>
            <option value="menorPrecio">Menor precio</option>
            <option value="mayorPrecio">Mayor precio</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-9 max-w-5xl max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
        {loading ? (
          <>
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
          </>
        ) : error ? (
          <p>{error}</p>
        ) : canchasOrdenadas.length === 0 ? (
          <p>No hay canchas disponibles</p>
        ) : (
          canchasOrdenadas.map((cancha: cancha) => (
            <CardResult
              key={cancha.id}
              id={cancha.id}
              nombre={cancha.nombre}
              descripcion={cancha.descripcion}
              precio={cancha.precio}
              valoracion={cancha.valoracion}
            />
          ))
        )}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Pagination
          count={totalPages}
          page={currentPage}
          size="large"
          onChange={(event, value) => handlePageChange(event, value)}
        />
      </div>
    </>
  );
}
