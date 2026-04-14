import { useState } from "react";
import { BotonAccion } from "../Button/Button";
import "./Styles.css";

export const Formulario = ({
  alEnviar,
  valoresIniciales = {
    titulo: "",
    director: "",
    anio: "",
    genero: "",
    tipo: "",
    id: "",
    rating: "",
    duracion_min: "",
    sinopsis: "",
  },
  textoBoton = "Crear",
}) => {
  const [titulo, setTitulo] = useState(valoresIniciales.titulo);
  const [director, setDirector] = useState(valoresIniciales.director);
  const [anio, setAnio] = useState(valoresIniciales.anio);
  const [genero, setGenero] = useState(valoresIniciales.genero);
  const [tipo, setTipo] = useState(valoresIniciales.tipo);
  const [id, setId] = useState(valoresIniciales.id);
  const [rating, setRating] = useState(valoresIniciales.rating);
  const [duracion_min, setDuracion_min] = useState(
    valoresIniciales.duracion_min,
  );
  const [sinopsis, setSinopsis] = useState(valoresIniciales.sinopsis);

  const manejarEnvio = (e) => {
    e.preventDefault();

    //Objeto pelicula
    const nuevaPelicula = {
      titulo: titulo,
      director: director,
      anio: anio,
      genero: genero,
      tipo: tipo,
      id: id,
      rating: rating,
      duracion_min: duracion_min,
      sinopsis: sinopsis
    };

    //envia los datos al componente padre (Create.jsx)
    alEnviar(nuevaPelicula);

    //Limpia Form
    setTitulo("");
    setDirector("");
    setAnio("");
    setGenero("");
    setTipo("");
    setId("");
    setRating("");
    setDuracion_min("");
    setSinopsis("");
  };

  return (
    <form className="formulario-container" onSubmit={manejarEnvio}>
      <div className="form-group">
        <label>Título: </label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Director: </label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Año: </label>
        <input
          type="number"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Género: </label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Tipo: </label>
        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Duración (min): </label>
        <input
          type="number"
          value={duracion_min}
          onChange={(e) => setDuracion_min(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Rating: </label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Sinopsis: </label>
        <input
          type="text"
          value={sinopsis}
          onChange={(e) => setSinopsis(e.target.value)}
          required
        />
      </div>

      <BotonAccion texto={textoBoton} tipo="submit" />
    </form>
  );
};
