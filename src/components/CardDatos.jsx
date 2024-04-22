// components/CardDatos.jsx
import { useStore } from '@nanostores/react';
import { datosStore } from '../stores/datosStore';

function CardDatos() {
  const datos = useStore(datosStore) || [];

  return (
    <>
      {datos.map((dato, index) => (
        <div key={index} className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
         
  
  <a href="#!">
    <img class="rounded-t-lg" src="../../public/codenomicon_icon.png" alt="" />
  </a>

  
  <div class="p-6">

    
    <h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
      {dato.titulo}
    </h5>

    
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

