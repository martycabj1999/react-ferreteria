import React from 'react';
import { Image, Button, Carousel, Row, Col, Container } from "react-bootstrap";
import '../styles/ProductDetails.css';
import { useSelector } from 'react-redux';
import FeaturedProducts from '../../featuredProducts/components/FeaturedProducts';

const ProductDetails = () => {

    const product = useSelector(state => state.products.productDetails);

    return (
        <div>
            <Container>
                    <Row style={{width: 'auto'}}>
                        <Col lg={3}>
                            <Carousel>
                                {product.images.map((productImage) =>
                                    <Carousel.Item key={productImage.image}>
                                        <Image
                                            src={productImage.image}
                                        />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </Col>
                        <Col>
                            <h3>Producto: {product.name}</h3>
                            <h3>Precio: $ {product.price}</h3>
                            <h5>Descripción: {product.long_description}</h5>
                            <Button className="button" variant="dark">Comprar</Button>
                        </Col>
                    </Row>
            </Container>
            <Row>
                <FeaturedProducts />
            </Row>
        </div>

    )
}

export default ProductDetails;
