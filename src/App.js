import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import UpperNavbar from "./components/UpperNavbar";
import LowerNavbar from "./components/LowerNavbar";
import Slider from "./components/Slider";
import FeaturedCategories from "./components/FeaturedCategories";

function App() {

  /* Listas de ejemplo */
  // Categorias
  const categories = [
    {
      title: "categoria 1",
      url: "categoria_1"
    },
    {
      title: "categoria 2",
      url: "categoria_2"
    },
    {
      title: "categoria 3",
      url: "categoria_3"
    }
  ];
  // Marcas
  const brands = [
    {
      title: "marca 1",
      url: "marca_1"
    },
    {
      title: "marca 2",
      url: "marca_2"
    }
  ];
  // Rubros
  const sections = [
    {
      title: "rubro 1",
      url: "rubro_1"
    },
    {
      title: "rubro 2",
      url: "rubro_2"
    },
    {
      title: "rubro 3",
      url: "rubro_3"
    },
    {
      title: "rubro 4",
      url: "rubro_4"
    }
  ];

  // Categorias destacadas
  const featuredCategories = [
    {
      title: "Electronica",
      url: "electronica"
    },
    {
      title: "Plomeria",
      url: "plomeria"
    },
    {
      title: "Jardineria",
      url: "jardineria"
    }
  ];
  /* Usuario esta logueado o no */
  const isLogued = true;

  return (
    <div>
      <header>
        <UpperNavbar />
        <LowerNavbar categories={categories} brands={brands} sections={sections} isLogued={isLogued} />
      </header>
      <body>
        <Slider />
        <FeaturedCategories featuredCategories={featuredCategories} />
      </body>
    </div>
  );
}

export default App;