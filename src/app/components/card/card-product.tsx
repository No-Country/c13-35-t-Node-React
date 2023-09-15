import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";

export default function CardResult({
  id,
  nombre,
  descripcion,
  precio,
  valoracion,
}: {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  valoracion: number;
}) {
  return (
    <article className="rounded-xl flex flex-col border-2 justify-between border-color-button">
      <div className="pl-5 pr-5 pt-5 rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt={nombre}
          className="w-full h-auto rounded-xl border-2 border-black object-cover"
        />
      </div>
      <div className="flex flex-col justify-start px-5 py-5">
        <h3 className="font-bold text-base">{nombre}</h3>
        <p className="text-left text-sm">{descripcion}</p>
        <Link href={`/search/${id}`} as={`/search/${id}`} className="text-sm">ver mas...</Link>
        <div className="flex items-center">
          <p className="font-bold text-2xl">$ {precio}</p>
          <p className="text-base">(por hora)</p>
        </div>

        <Rating value={valoracion} precision={0.1} readOnly />
      </div>
      <div className="w-full rounded-br-lg rounded-bl-lg bg-[#576702] flex justify-end items-center">
        <Link
          href={`/search/${id}`}
          className="text-white text-center text-xl w-full"
          as={`/search/${id}`}
        >
          Reservar
        </Link>
      </div>
    </article>
  );
}
