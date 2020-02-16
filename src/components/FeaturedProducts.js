import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const FeaturedProducts = ({featuredProducts}) => {

    const listFeaturedProducts = featuredProducts.map((product) =>
        <Carousel.Item>
            <img
            className="d-block"
            src={product.url_img}
            alt="First slide"
            />

            <h3>{product.price}</h3>
            <p>{product.name}</p>
        </Carousel.Item>
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
                        {listFeaturedProducts}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedProducts;
