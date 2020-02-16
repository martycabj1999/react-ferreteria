import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap";
import './FeaturedProducts.css';

const FeaturedProducts = () => {

    const featuredProducts = [
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=100",
          price: 101
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/909256/pexels-photo-909256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
          price: 102
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/1409215/pexels-photo-1409215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
          price: 103
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
          price: 104
        },
        {
          name: "tornillos",
          url_img: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100",
          price: 105
        }
    ]

    const listFeaturedProducts = featuredProducts.map((product) =>
        <div className="card-content"></div>
    )

    return (
        <Container id="container">
            <Row>
                <Col xs={12} md={12}>
                    <h3>Productos Destacados</h3>
                </Col>
            </Row>
            <div className="container-featured-products">
                <section class="card">
                    {listFeaturedProducts}
                </section>
            </div>
        </Container>
    )
}

export default FeaturedProducts;
