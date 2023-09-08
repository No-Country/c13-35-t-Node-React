import Rating from "@mui/material/Rating";

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
      <div className="p-5 rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt={nombre}
          className="w-full rounded-xl border-2 border-black w-[225px] h-[175px]"
        />
      </div>
      <div className="flex flex-col justify-start px-5 py-5">
        <h3 className="font-bold text-base">{nombre}</h3>
        <p className="text-left text-sm">{descripcion}</p>
        <a>ver mas...</a>
        <div className="flex items-center">
          <h3 className="font-bold">$ {precio}</h3>
          <p className="text-xs">(por hora)</p>
        </div>

        <Rating value={valoracion} precision={0.1} readOnly />
      </div>
      <div className="w-full rounded-br-lg rounded-bl-lg bg-[#576702] flex justify-center items-center">
        <a
          href={`/search/${id}`}
          className="text-white text-center text-xl w-full"
        >
          Reservar
        </a>
      </div>
    </article>
  );
}
