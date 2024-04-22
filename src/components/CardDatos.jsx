// components/CardDatos.jsx
import { useStore } from '@nanostores/react';
import { datosStore } from '../stores/datosStore';

function CardDatos() {
  const datos = useStore(datosStore) || [];

  return (
    <>
      {datos.map((dato, index) => (
        <div key={index} className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
         
  {/* Card image */}
  <a href={dato.url} target="_blank" rel="noopener noreferrer">
    <img class="rounded-t-lg" src={
      dato.img && dato.img !== "Failed to retrieve" && dato.img !== "Not Found" && dato.img !== "og-image.png"
      ? dato.img
      : "/codenomicon_icon.png"
    } alt="" />
  </a>

  {/* Card body */}
  <div class="p-6">

    {/* Title */}
    <h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
      {dato.titulo}
    </h5>

    {/* Text */}
    <p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
      {dato.descripcion}
    </p>

  </div>

</div>
      ))}
    </>
  );
}

export default CardDatos;

