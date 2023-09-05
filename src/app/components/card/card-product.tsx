export default async function CardResult({
  id,
  nombre,
  descripcion,
  precio,
}: {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}) {
  return (
    <article className="rounded-xl flex flex-col border-2 border-color-button">
      <div className="p-5 rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt={nombre}
          className="w-full rounded-xl border-2 border-black w-[225px] h-[175px]"
        />
      </div>
      <div className="flex flex-col justify-start px-5 py-2">
        <h3 className="font-bold">{nombre}</h3>
        <p>{descripcion}</p>
        <a>ver mas...</a>
        <div className="flex items-center">
          <h3 className="font-bold">$ {precio}</h3>
          <p className="text-xs">(por hora)</p>
        </div>
        <div>
          <p>⚽⚽⚽⚽⚽</p>
        </div>
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
