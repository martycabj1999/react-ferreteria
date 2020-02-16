import React from 'react';
import './App.css';
import Footer from './components/Footer';
import FeaturedProducts from './components/FeaturedProducts';
import product1 from './components/img/producto1.jpg';
import product2 from './components/img/producto2.jpg';
import product3 from './components/img/producto3.jpg';
import product4 from './components/img/producto4.jpg';
import product5 from './components/img/producto5.jpg';

function App() {

  const featuredProducts = [
    {
      name: 'tornillos',
      url_img: { product1 },
      price: 100
    },

    {
      name: 'tornillos',
      url_img: { product2 },
      price: 100
    },

    {
      name: 'tornillos',
      url_img: { product3 },
      price: 100
    },

    {
      name: 'tornillos',
      url_img: { product4 },
      price: 100
    },

    {
      name: 'tornillos',
      url_img: { product5 },
      price: 100
    }
  ]

  return (
    <div className="App">
      <FeaturedProducts featuredProducts={featuredProducts} />
      <Footer />
    </div>
  );
}

export default App;
