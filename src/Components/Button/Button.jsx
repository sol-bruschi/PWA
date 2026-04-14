import "./Styles.css";

//El botón recibe el texto que llevará dentro, la acción que realizará, y el tipo (me sirve para los submit)
export const BotonAccion = ({ texto, onClick, tipo }) => {
  return (
    <button className="boton" onClick={onClick} type={tipo}>
      {texto}
    </button>
  );
};

