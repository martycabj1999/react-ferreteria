import React from "react"
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

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
        <>
            <Image src={product.url_img} />
            <h3>{product.price}</h3>
            <p>{product.name}</p>
        </>
    )

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={12}>
                    <h3>Productos Destacados</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            {listFeaturedProducts}        
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedProducts;
