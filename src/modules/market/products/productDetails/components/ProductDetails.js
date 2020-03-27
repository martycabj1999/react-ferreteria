import React, { useState, useEffect } from 'react';
import { Image, Button, Carousel, Row, Col, Container } from "react-bootstrap";
import '../styles/ProductDetails.css';
import FeaturedProducts from '../../featuredProducts/components/FeaturedProducts';
import ProductService from '../../providers/ProductProvider';

const ProductDetails = (props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const productId = (window.location.pathname).split('/')[2]
            ProductService.getProductById(productId).subscribe(({ status, data }) => {
            if (status === 200) {
              setProduct(data)
            }
          });
        }
        fetchData();
    }, [props.location.pathname]);
    

    return (
        <div>
            <Container>
                    <Row style={{width: 'auto'}}>
                        <Col lg={3}>
                            <Carousel>
                                {/*product.images.map((productImage) =>
                                    <Carousel.Item key={productImage.image}>
                                        <Image
                                            src={productImage.image}
                                        />
                                    </Carousel.Item>
                                )*/}
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
