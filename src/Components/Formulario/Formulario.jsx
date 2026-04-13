import { useState } from "react";
import { BotonAccion } from "../Button/Button";

export const Formulario = ({ alEnviar,
    valoresIniciales={ titulo: "", director: "", anio: "", genero: "", tipo: ""}, textoBoton= "Crear"
 }) => {
  const [titulo, setTitulo] = useState(valoresIniciales.titulo);
  const [director, setDirector] = useState(valoresIniciales.director);
  const [anio, setAnio] = useState(valoresIniciales.anio);
  const [genero, setGenero] = useState(valoresIniciales.genero);
  const [tipo, setTipo] = useState(valoresIniciales.tipo);

  const manejarEnvio = (e) => {
    e.preventDefault();

    //Objeto pelicula
    const nuevaPelicula = {
      titulo: titulo,
      director: director,
      anio: anio,
      genero: genero,
      tipo: tipo,
    };

    //envia los datos al componente padre (Create.jsx)
    alEnviar(nuevaPelicula);

    //Limpia Form
    setTitulo("");
    setDirector("");
    setAnio("");
    setGenero("");
    setTipo("");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Título: </label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Director: </label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Año: </label>
        <input
          type="text"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Género: </label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Tipo: </label>
        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />
      </div>

      <BotonAccion texto={textoBoton} tipo="submit" />
    </form>
  );
};
