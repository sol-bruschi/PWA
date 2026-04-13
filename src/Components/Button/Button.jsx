import "./Styles.css";

//El botón recibe el texto que llevará dentro, y la acción que realizará
export const BotonAccion = ({ texto, onClick }) => {
  return (
    <button className="boton" onClick={onClick}>
      {texto}
    </button>
  );
};

