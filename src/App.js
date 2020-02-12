import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavbarSuperior from "./components/NavbarSuperior";
import NavbarInferior from "./components/NavbarInferior";

function App() {
  /* Categorias de ejemplo */
  const categories = [
    {
      name : "categoria 1",
      url : "categoria_1"
    },
    {
      name : "categoria 2",
      url : "categoria_2"
    },
    {
      name : "categoria 3",
      url : "categoria_3"
    }
  ];

  return (
    <div>
      <header>
              
      <NavbarSuperior />
      <NavbarInferior categories={categories}/>

      </header>
    </div>
  );
}

export default App;
