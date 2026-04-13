import { Formulario } from './../../Components/Formulario/Formulario';

export const Edit = () => {
  
  // Simulamos la película que ya existe (más adelante esto vendrá de tu lista)
  const peliculaAEditar = {
    titulo: "Matrix",
    director: "Lana Wachowski"
  };

  // Esta función se ejecuta al hacer click en "Guardar Cambios"
  const actualizarPelicula = (datosEditados) => {
    console.log("¡Película actualizada!", datosEditados);
    // Aquí luego usarías un navigate('/') para volver al Home
  };

  return (
    <div>
      <h2>Editar Película</h2>
      
      {/* Reutilizamos el Formulario pasándole los datos y cambiando el botón */}
      <Formulario 
        alEnviar={actualizarPelicula} 
        valoresIniciales={peliculaAEditar} 
        textoBoton="Guardar Cambios" 
      />
    </div>
  );
};