// components/CategoriaButton.jsx

import { cargarDatos } from '../stores/datosStore';
import { ICONS } from '../icons/icons'; 

function CategoriaButton({ titulo, categoria }) {
  const handleClick = (e) => {
    e.preventDefault(); // Previene la acción por defecto del enlace
    // Llamamos a cargarDatos con la categoría correspondiente
    cargarDatos(categoria);
  };
  const Icono = ICONS[categoria];
  return (
    <a href="#" onClick={handleClick} className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg">
      {Icono && <Icono width="20" height="20" fill="currentColor" className="m-auto" />}
      
      <span className="mx-4 text-lg font-normal">
        {titulo}
      </span>
    </a>
  );
}

export default CategoriaButton;