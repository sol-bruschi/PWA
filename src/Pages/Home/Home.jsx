import { CardPrincipal } from "./../../Components/Card/Card";
import { BotonAccion } from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export const Home = ({ contenidos }) => {
  const navigate = useNavigate();
  
  const irACreate = () => {
    navigate("/create");
  };

  const listaPorVer = contenidos.filter(item => item.visto === false);
  const listaVistas = contenidos.filter(item => item.visto === true);

  return (
    <div className="home-container">
      <header className="home-header">
        <BotonAccion texto={"+ Nueva"} onClick={irACreate} />
      </header>

      <section className="filtros-seccion">
        <div className="buscador-simulado">🔍 Buscar por título o director...</div>
        <div className="filtros-row">
          <span>Filtro Género 🔽</span>
          <span>Filtro Tipo 🔽</span>
          <span>Orden 🔽</span>
        </div>
      </section>

      <main className="columnas-grid">
        
        {/* Columna IZQUIERDA: Por Ver */}
        <section className="columna">
          <div className="columna-titulo">
            <span>Por Ver</span>
            <span className="contador-badge">{listaPorVer.length} títulos</span>
          </div>
          
          {listaPorVer.length === 0 ? (
            <p className="mensaje-vacio">No hay películas pendientes.</p>
          ) : (
            listaPorVer.map((peli) => (
              <CardPrincipal
                key={peli.id}
                pelicula={peli}
                iconoTitulo={peli.tipo === "serie" ? "📺" : "🎬"}
              />
            ))
          )}
        </section>

        {/* Columna DERECHA: Visto */}
        <section className="columna">
          <div className="columna-titulo">
            <span>Visto</span>
            <span className="contador-badge">{listaVistas.length} títulos</span>
          </div>
          
          {listaVistas.length === 0 ? (
            <p className="mensaje-vacio">No hay películas vistas todavía.</p>
          ) : (
            listaVistas.map((peli) => (
              <CardPrincipal
                key={peli.id}
                pelicula={peli}
                iconoTitulo={peli.tipo === "serie" ? "📺" : "🎬"}
              />
            ))
          )}
        </section>

      </main>
    </div>
  );
};