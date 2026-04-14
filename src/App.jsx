import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Create } from "./Pages/Create/Create";
import { Edit } from "./Pages/Edit/Edit";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Declaro las rutas */}
      <main>
        <Routes>
          {/* Route define una ruta específica:
            path = lo que va en la URL (ej: misitio.com/)
            element = el componente que se va a mostrar */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:titulo" element={<Edit />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
