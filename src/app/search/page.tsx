import CardResult from "@/app/components/card/card-product";
import { Pagination } from "@/app/components/searchComponent/pagination";
import { Filtro, FiltroList } from "@/app/components/searchComponent/filter";
import { getCanchas } from "@/app/services/canchas";

interface cancha {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  reservada: boolean;
  deporte: string;
}

export default async function SearchResults() {
  const Canchas = await getCanchas();
  return (
    <main className="flex justify-center gap-3 py-6">
      <Filtro />
      <section className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>1111 resultados</p>
          <FiltroList/>
        </div>
        <div className="grid grid-cols-3 gap-9">
          {Canchas.map((cancha: cancha) => (
            <CardResult
              key={cancha.id}
              id={cancha.id}
              nombre={cancha.nombre}
              descripcion={cancha.descripcion}
              precio={cancha.precio}
            />
          ))}
        </div>
        <div className="flex  items-center justify-center">
          <Pagination />
        </div>
      </section>
    </main>
  );
}
