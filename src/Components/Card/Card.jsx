import "./Styles.css";
import { BotonAccion } from "./../Button/Button";
import { Title } from "./../Title/Title";
import { useNavigate } from "react-router-dom";

// a esta card le quiero pasar toda la info posible
export const CardPrincipal = ({ pelicula, iconoTitulo }) => {
  const navigate = useNavigate();

  return (
    <div className="cardPrincipal">
      <div className="imagen">
        <img src={pelicula.urlImagen} alt={pelicula.titulo} />
      </div>
      <div className="titulo">
        <Title text={pelicula.titulo} icon={iconoTitulo}></Title>
      </div>
      <div className="director">
        <Title text={pelicula.director} icon={iconoTitulo}></Title>
      </div>
      <div className="anio">
        <Title text={pelicula.anio} icon={iconoTitulo}></Title>
      </div>
      <div className="sinopsis">
        <p>{pelicula.sinopsis}</p>
      </div>
      <div className="botones">
        <BotonAccion
          texto="Editar"
          onClick={() => navigate(`/edit/${pelicula.titulo}`)}
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
