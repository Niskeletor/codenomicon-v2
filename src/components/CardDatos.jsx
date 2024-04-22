// components/CardDatos.jsx
import { useStore } from '@nanostores/react';
import { datosStore } from '../stores/datosStore';

function CardDatos() {
  const datos = useStore(datosStore) || [];

  return (
    <>
      {datos.map((dato, index) => (
        <div key={index} className="w-full  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Imagen SVG */}
          </svg>
          <a href={dato.url}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{dato.titulo}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{dato.descripcion}</p>
          
          {/* Agregar botones adiccionales
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Hola {dato.id}</p> */}
        </div>
      ))}
    </>
  );
}

export default CardDatos;