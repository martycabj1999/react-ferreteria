import React from "react"
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {

    const minimunSlides=4;
    const featuredProducts = [
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3",
          price: 101
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/909256/pexels-photo-909256.jpeg?auto=compress&cs=tinysrgb&dpr=2&",
          price: 102
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/1409215/pexels-photo-1409215.jpeg?auto=compress&cs=tinysrgb&dpr=2",
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&dpr=2",
          price: 104
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2",
          price: 105
        }
    ]

    const listFeaturedProducts = featuredProducts.map((product) =>
       
     <Carousel.Item className="carosuel-item"> 
        <Image thumbnail fluid
          className="d-block w-50"
          src={product.url_img} 
        />

        <h4>{product.price}</h4>
        <h6>{product.name}</h6>
        <Button variant="dark">Comprar</Button>
      </Carousel.Item>
    )

    return (
        <Container className="featured-products-container">
            <Row>
                <Col xs={12} md={12}>
                    <h3>Productos destacados</h3>
                </Col>
            </Row>
            <Row>
              <Carousel className="featured-products-carousel">
                {listFeaturedProducts}
              </Carousel>
            </Row>
            
        </Container>
    )
}

export default FeaturedProducts;
