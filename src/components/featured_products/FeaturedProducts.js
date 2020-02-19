import React from "react"
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {

    const minimunSlides=4;
    const featuredProducts = [
        {
          name: "Hidrolavadora Profesional 135 Bar Motor ",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100",
          price: 101
        },
        {
          name: "Hidrolavadora Profesional 135 Bar Motor ",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100",
          price: 102
        },
        {
          name: "Hidrolavadora Profesional 135 Bar Motor",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100",
          price: 103
        },
        {
          name: "Hidrolavadora Profesional 135 Bar Motor ",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100",
          price: 104
        },
        {
          name: "Hidrolavadora Profesional 135 Bar Motor ",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100",
          price: 105
        }
    ]

    const listFeaturedProducts = featuredProducts.map((product) =>      
      <div className='product'>
        <Image thumbnail
            src={product.url_img}
        /> 
        <h2>{product.price}</h2>
        <h6>{product.name}</h6>
        <Button variant="dark">Comprar</Button>
      </div>
    );

    return (
      <div className="featured-products-container">
        <h3>Productos destacados</h3>
        <div class='scroll'>
          {listFeaturedProducts}
        </div>
      </div>
    )
}

export default FeaturedProducts;
