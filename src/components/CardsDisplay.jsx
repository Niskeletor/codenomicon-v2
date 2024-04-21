// components/CardsDisplay.jsx
import { useStore } from '@nanostores/react';
import { datosStore } from '../stores/datosStore';

function CardDatos() {
  const datos = useStore(datosStore) || [];  // Asegura que datos sea al menos un array vacío

  return (
    <div>
      {datos.map((dato, index) => (  // .map() operará correctamente incluso si datos es un array vacío
        <div key={index}>
          <h3>{dato.titulo}</h3>
          <p>{dato.url}</p>
          <p>Hola {dato.id}</p>
        </div>
      ))}
    </div>
  );
}

export default CardDatos;
