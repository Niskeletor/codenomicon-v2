// components/CardsDisplay.jsx
import CardDatos from './CardDatos';

function CardsDisplay() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <CardDatos />
    </div>
  );
}

export default CardsDisplay;