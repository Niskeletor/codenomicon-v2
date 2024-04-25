// components/CategoriaButton.jsx

import { cargarDatos } from '../stores/datosStore';

function CategoriaButton({ titulo, categoria, icono }) {
  const handleClick = async (e) => {
    e.preventDefault();
    console.log('Click en CategoriaButton:', categoria);
    await cargarDatos(categoria);
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
    >
      {icono && <div className="mr-4">{icono}</div>}
      <span className="mx-4 text-lg font-normal">{titulo}</span>
    </a>
  );
}

export default CategoriaButton;