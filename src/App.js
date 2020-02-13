import React from "react";
import "./App.css";

import NavbarSuperior from "./components/NavbarSuperior";
import NavbarInferior from "./components/NavbarInferior";

function App() {

  /* Listas de ejemplo */
  // Categorias
  const categories = [
    {
      name: "categoria 1",
      url: "categoria_1"
    },
    {
      name: "categoria 2",
      url: "categoria_2"
    },
    {
      name: "categoria 3",
      url: "categoria_3"
    }
  ];
  // Marcas
  const brands = [
    {
      name: "marca 1",
      url: "marca_1"
    },
    {
      name: "marca 2",
      url: "marca_2"
    }
  ];
  // Rubros
  const sections = [
    {
      name: "rubro 1",
      url: "rubro_1"
    },
    {
      name: "rubro 2",
      url: "rubro_2"
    },
    {
      name: "rubro 3",
      url: "rubro_3"
    },
    {
      name: "rubro 4",
      url: "rubro_4"
    }
  ];

  return (
    <div>
      <header>
        <NavbarSuperior />
        <NavbarInferior categories={categories} brands={brands} sections={sections} />
      </header>
    </div>
  );
}

export default App;