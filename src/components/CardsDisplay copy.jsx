// components/CardsDisplay.jsx
// components/CardDatos.jsx
import { useStore } from '@nanostores/react';
import { datosStore } from '../stores/datosStore';

function CardDatos() {
  const datos = useStore(datosStore) || [];

  return (
    <div>
      {datos.map((dato, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Aquí puedes reemplazar el SVG con una imagen o ícono relacionado con tus datos */}
          </svg>
          <a href={dato.url}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{dato.titulo}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Hola {dato.id}</p>
          {/* Aquí puedes agregar un enlace o botón si es necesario */}
        </div>
      ))}
    </div>
  );
}

export default CardDatos;