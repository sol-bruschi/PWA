import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Create } from "./Pages/Create/Create";
import { Edit } from "./Pages/Edit/Edit";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  const [contenidos, setContenidos] = useState(() => {
    const almacenados = localStorage.getItem("listado-pwa");
    return almacenados ? JSON.parse(almacenados) : [];
  });

  useEffect(() => {
    localStorage.setItem("listado-pwa", JSON.stringify(contenidos));
  }, [contenidos]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* PASAMOS LAS PROPS AQUÍ */}
          <Route 
            path="/" 
            element={<Home contenidos={contenidos} setContenidos={setContenidos} />} 
          />
          <Route 
            path="/create" 
            element={<Create contenidos={contenidos} setContenidos={setContenidos} />} 
          />
          <Route 
            path="/edit/:id" 
            element={<Edit contenidos={contenidos} setContenidos={setContenidos} />} 
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}