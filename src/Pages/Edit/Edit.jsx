import { Formulario } from "./../../Components/Formulario/Formulario";
import { baseDatos } from "../../../basePelisSeries";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = ({ contenidos, setContenidos }) => {
  const { id } = useParams(); //viene por url el id
  const navigate = useNavigate();
  const peliculaAEditar = contenidos.find(
    (pelicula) => String(pelicula.id) === String(id),
  );

  // Esta función se ejecuta al hacer click en "Guardar Cambios"
  const actualizarPelicula = (datosDelForm) => {
    setContenidos((prevContenidos) =>
      prevContenidos.map((p) =>
        String(p.id) === String(id) ? { ...p, ...datosDelForm } : p,
      ),
    );
    navigate("/");
  };

  if (!peliculaAEditar) {
    return (
      <div className="home-container">
        <h2>Película no encontrada</h2>
        <button onClick={() => navigate("/")}>Volver al Inicio</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h2>Editar Película</h2>

      <Formulario
        alEnviar={actualizarPelicula}
        valoresIniciales={peliculaAEditar}
        textoBoton="Guardar Cambios"
      />
    </div>
  );
};
