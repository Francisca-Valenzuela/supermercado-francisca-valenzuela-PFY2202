import Boton from './Boton';

const ajustes = [-10, -1, 1, 10];

function ControlStock({ stock, onAjustar }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Ajustar stock">
      {ajustes.map((delta) => (
        <Boton
          key={delta}
          variante={delta < 0 ? 'secundario' : 'primario'}
          disabled={delta < 0 && stock < Math.abs(delta)}
          onClick={() => onAjustar(delta)}
          aria-label={
            delta > 0
              ? `Agregar ${delta} unidades al stock`
              : `Quitar ${Math.abs(delta)} unidades del stock`
          }
        >
          {delta > 0 ? `+${delta}` : delta}
        </Boton>
      ))}
    </div>
  );
}

export default ControlStock;