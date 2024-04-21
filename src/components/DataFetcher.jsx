// components/DataFetcher.jsx
import { cargarDatos } from '../stores/datosStore';

export default function DataFetcher() {
  const handleClick = async () => {
    await cargarDatos();
  };

  return <button onClick={handleClick}>Cargar Datos</button>;
}