import "./Styles.css";
import { BotonAccion } from "./../Button/Button";
import { Title } from "./../Title/Title";
// a esta card le quiero pasar toda la info posible
export const CardPrincipal = ({ urlImagen, titulo, iconoTitulo, detalle }) => {
  return (
    <div className="cardPrincipal">
      <div className="imagen">
        <img src={urlImagen} alt={titulo} />
      </div>
      <div className="titulo">
        <Title text={titulo} icon={iconoTitulo}></Title>
      </div>
      <div className="detalle">
        <p>{detalle}</p>
      </div>
      <div className="botones">
        <BotonAccion
          texto="Editar"
          onClick={() => alert("Editar peli")}
        ></BotonAccion>
        <BotonAccion
          texto="Eliminar"
          onClick={() => alert("Eliminar peli")}
        ></BotonAccion>
      </div>
    </div>
  );
};
// una vez que definamos las funciones las colocamos en los alerts que están de prueba
