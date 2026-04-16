import { Formulario } from "./../../Components/Formulario/Formulario";
import { useNavigate } from "react-router-dom";

export const Create = ({ contenidos, setContenidos }) => {
  const navigate = useNavigate();

  const guardarPelicula = (datosDelForm) => {
    const peliculaFinal = {
      ...datosDelForm,
      id: Date.now(),
      vista: datosDelForm.vista ? true : false,
    };
    
    setContenidos(prevContenidos => {
      const base = Array.isArray(prevContenidos) ? prevContenidos : [];
      return [...base, peliculaFinal];
    });
    navigate("/");
  };

  return (
    <div className="home-container">
      <h2>Agregar nueva película</h2>
      {/* Conectamos el Formulario con nuestra función */}
      <Formulario alEnviar={guardarPelicula} />
    </div>
  );
};