import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './FeaturedCategories.css';

const FeaturedCategories = ({ featuredCategories }) => {

    const list = featuredCategories.map((category) =>
        <Carousel.Item>
            <h4>
                <a
                    href={category.url}>
                    {category.title}
                </a>
            </h4>
        </Carousel.Item>
    );

    return (
        <Container fluid>
            <Row>
                <Col md={4} lg={4}>
                    <h3>Categorias <strong>Destacadas</strong></h3>
                </Col>
                <Col md={8} lg={8}>
                    <Carousel>
                        {list}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default FeaturedCategories;