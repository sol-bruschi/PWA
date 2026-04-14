import { CardPrincipal } from "./../../Components/Card/Card";
import { BotonAccion } from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export const Home = () => {
  //uso navigate para poder ir del home a create
  const navigate = useNavigate();
  const irACreate = () => {
    navigate("/create");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <BotonAccion texto={"+ Nueva"} onClick={irACreate}></BotonAccion>
      </header>
      <section className="filtros-seccion">
        <div className="buscador-simulado">
          🔍 Buscar por título o director...
        </div>
        <div className="filtros-row">
          <span>Filtro Género 🔽</span>
          <span>Filtro Tipo 🔽</span>
          <span>Orden 🔽</span>
        </div>
      </section>
      {/* 3. El Grid de dos columnas */}
      <main className="columnas-grid">
        
        {/* Columna IZQUIERDA: Por Ver */}
        <section className="columna">
          <div className="columna-titulo">
            <span>Por Ver</span>
            <span className="contador-badge">1 título</span>
          </div>
          
          <CardPrincipal
            pelicula={{
              titulo: "Matrix",
              sinopsis: "Un hacker descubre la verdad sobre su realidad.",
              director: "Wachowski",
              anio: "1999",
              urlImagen: "./../../../public/favicon.svg",
            }}
            iconoTitulo={"🎬"}
          />
        </section>

        {/* Columna DERECHA: Visto */}
        <section className="columna">
          <div className="columna-titulo">
            <span>Visto</span>
            <span className="contador-badge">0 títulos</span>
          </div>
          {/* Aquí irían las pelis ya vistas */}
          <p style={{color: '#999', textAlign: 'center'}}>No hay películas vistas todavía.</p>
        </section>

      </main>

    </div>
  );
};
