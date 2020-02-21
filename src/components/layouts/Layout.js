import React from 'react';
import Footer from './footer/Footer';
import UpperNavbar from "./navbar/UpperNavbar";
import LowerNavbar from "./navbar/LowerNavbar";

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

  /* Usuario esta logueado o no */
  const isLogued = false;

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <UpperNavbar />
                <LowerNavbar categories={categories} brands={brands} sections={sections} isLogued={isLogued} />
            </header>
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;