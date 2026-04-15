import { CardPrincipal } from "./../../Components/Card/Card";
import { BotonAccion } from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Styles.css";
import { baseDatos } from "./../../../basePelisSeries"; //base de ejemplo generada con mockaroo

export const Home = () => {
  //uso navigate para poder ir del home a create
  const navigate = useNavigate();

  /* filtros necesarios 
  titulo: ok
  director: ok
  tipo: ok
  vista: ok
  anio: ok
  rating: ok
  genero: ok
  */

  //Estados para filtros y límite (la base arranca con 1000 pelis)
  const [busquedaTitulo, setBusquedaTitulo] = useState("");
  const [busquedaDirector, setBusquedaDirector] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [filtroRating, setFiltroRating] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");
  const [limite, setLimite] = useState(10); // Mostramos solo 10 al principio

  const irACreate = () => {
    navigate("/create");
  };

  //lógica de filtrado
  const peliculasFiltradas = baseDatos.filter((pelicula) => {
    // Filtro por Titulo
    const coincideTitulo = pelicula.titulo
      .toLowerCase()
      .includes(busquedaTitulo.toLowerCase());
    // filtro por Director
    const coincideDirector = pelicula.director
      .toLowerCase()
      .includes(busquedaDirector.toLowerCase());
    // filtro por tipo  (si está vacío, trae todos)
    const coincideTipo = filtroTipo === "" || pelicula.tipo === filtroTipo;
    // Filtro por género (si está vacío, trae todos)
    const coincideGenero =
      filtroGenero === "" || pelicula.genero === filtroGenero;
    // Filtro por rating
    const coincideRating =
      filtroRating === "" || pelicula.rating >= filtroRating;
    // Filtro por año
    const coincideAnio = filtroAnio === "" || pelicula.anio >= filtroAnio;

    return (
      coincideTitulo &&
      coincideDirector &&
      coincideTipo &&
      coincideRating &&
      coincideGenero &&
      coincideAnio
    );
  });

  //Luego de filtrar separo por estado (vista / por ver)
  const peliculasPorVer = peliculasFiltradas.filter((p) => p.vista === false);
  const peliculasVistas = peliculasFiltradas.filter((p) => p.vista === true);

  return (
    <div className="home-container">
      <header className="home-header">
        <BotonAccion texto={"+ Nueva"} onClick={irACreate}></BotonAccion>
      </header>
      <section className="filtros-seccion">
        <div className="buscador-simulado">
          🔍
          <input
            type="text"
            placeholder="Buscar por título"
            value={busquedaTitulo}
            onChange={(e) => setBusquedaTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Buscar por director"
            value={busquedaDirector}
            onChange={(e) => setBusquedaDirector(e.target.value)}
          />
        </div>
        <div className="filtros-row">
          <span>
            Género:
            <select
              value={filtroGenero}
              onChange={(e) => setFiltroGenero(e.target.value)}            >
              <option value="">Todos</option>
              <option value="Acción">Acción</option>
              <option value="Comedia">Comedia</option>
              <option value="Terror">Terror</option>
              <option value="Ciencia Ficción">Ciencia Ficción</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Drama">Drama</option>
              <option value="Infantil">Infantil</option>
              <option value="Otro">Otro</option>
            </select>
          </span>
          <span>
            Tipo:
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Pelicula">Película</option>
              <option value="Serie">Serie</option>
            </select>
          </span>
          <span>
            Año:
            <input
              type="number"
              placeholder="2012"
              value={filtroAnio}
              onChange={(e) => setFiltroAnio(e.target.value)}
            />
          </span>
          <span>
            Rating:
            <select
              value={filtroRating}
              onChange={(e) => setFiltroRating(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐</option>
              <option value="3">3 ⭐</option>
              <option value="4">4 ⭐</option>
              <option value="5">5 ⭐</option>
            </select>
          </span>
        </div>
      </section>
      <main className="columnas-grid">
        {/* Columna IZQUIERDA: Por Ver */}
        <section className="columna">
          <div className="columna-titulo">
            <span>Por Ver</span>
            <span className="contador-badge">
              {peliculasPorVer.length} título
            </span>
          </div>

          {peliculasPorVer.slice(0, limite).map((pelicula) => (
            <CardPrincipal pelicula={pelicula} iconoTitulo={"🍿"} />
          ))}

          {peliculasPorVer.length === 0 && (
            <p style={{ color: "#999", textAlign: "center" }}>
              No hay películas para mostrar.
            </p>
          )}
        </section>

        {/* Columna DERECHA: Visto */}
        <section className="columna">
          <div className="columna-titulo">
            <span>Visto</span>
            <span className="contador-badge">
              {peliculasVistas.length} títulos
            </span>
          </div>
          {peliculasVistas.slice(0, limite).map((pelicula) => (
            <CardPrincipal pelicula={pelicula} iconoTitulo={"🍿"} />
          ))}

          {peliculasVistas.length === 0 && (
            <p style={{ color: "#999", textAlign: "center" }}>
              No hay películas para mostrar.
            </p>
          )}
        </section>
      </main>
      {limite < peliculasFiltradas.length && (
        <div className="home-header">
          <BotonAccion
            texto="Cargar más"
            onClick={() => setLimite(limite + 10)}
          />
        </div>
      )}
    </div>
  );
};
