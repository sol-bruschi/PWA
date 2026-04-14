import { Formulario } from "./../../Components/Formulario/Formulario";

export const Create = () => {
  //para pasarle al form
  const guardarPelicula = (pelicula) => {
    console.log("¡Datos recibidos en la página Create!", pelicula);
  };

  return (
    <div className="home-container">
      <h2>Agregar nueva película</h2>

      <Formulario alEnviar={guardarPelicula} />
    </div>
  );
};
