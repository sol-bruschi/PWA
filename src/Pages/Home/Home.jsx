import { CardPrincipal } from "./../../Components/Card/Card";

export const Home = () => {
  return (
    <div>
      <h1>Probando mis componentes</h1>
      {/* probando vista de la tarjeta */}
      <CardPrincipal
        titulo="Matrix"
        detalle="Un hacker descubre la verdad sobre su realidad."
        urlImagen="./../../../public/favicon.svg"
      />
    </div>
  );
};
