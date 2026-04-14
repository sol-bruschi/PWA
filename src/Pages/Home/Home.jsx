import { CardPrincipal } from "./../../Components/Card/Card";
import { BotonAccion } from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  //uso navigate para poder ir del home a create
  const navigate = useNavigate();
  const irACreate = () => {
    navigate("/create");
  };

  return (
    <div>
      <h1>Probando mis componentes</h1>
      <BotonAccion texto={"Agregar"} onClick={irACreate}></BotonAccion>
      <CardPrincipal
        pelicula={{
          titulo: "matrix",
          sinopsis: "Un hacker descubre la verdad sobre su realidad.",
          director: "Un director",
          anio: "2020",
          urlImagen: "./../../../public/favicon.svg",
        }}
        iconoTitulo={""}
      />
    </div>
  );
};
