import { useState } from "react";
import { Menu, Footer, Slider, Pilares, Titulo } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const items = ["Servicios", "Nosotros", "Contactos"];
  const empresa = "MechaWork";
  const infoPilares = [
    {
      title: "Reparaciones",
      text: "Servicios de reparaciones",
    },
    {
      title: "Pintura",
      text: "Tipos de pintura",
    },
    {
      title: "Limpieza",
      text: "Tipos de limpieza para autos",
    },
  ];

  return (
    <>      
      <div>
        <Menu items={items} title={empresa} />
        <Slider />
        <Titulo title={empresa} />
        <Pilares data={infoPilares} />
        <Footer items={items} title={empresa} />
      </div>   
    </>
  );
}

export default App;
