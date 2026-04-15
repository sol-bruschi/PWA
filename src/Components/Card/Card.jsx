import "./Styles.css";
import { BotonAccion } from "./../Button/Button";
import { Title } from "./../Title/Title";
import { useNavigate } from "react-router-dom";

// a esta card le quiero pasar toda la info posible
export const CardPrincipal = ({ pelicula, iconoTitulo }) => {
  const navigate = useNavigate();

  return (
    <div className="pelicula-card">
      <div className="imagen">
        {/* <img src={pelicula.url_imagen} alt={pelicula.titulo} /> */}
        <img src={`https://picsum.photos/seed/${pelicula.id}/300/450`} alt={pelicula.titulo} />
      </div>
      <div className="card-header">
        <Title text={pelicula.titulo}></Title>
      </div>
      <div className="info-secundaria">
        <div className="director">
          <span>{pelicula.director}</span>
        </div>
        <div className="anio">
          <span>{pelicula.anio}</span>
        </div>
      </div>
      <div className="botones">
        <BotonAccion
          texto="Editar"
          onClick={() => navigate(`/edit/${pelicula.id}`)}
        ></BotonAccion>
        <BotonAccion
          texto="Eliminar"
          onClick={() => alert("Eliminar peli")}
        ></BotonAccion>
      </div>
    </div>
  );
};
