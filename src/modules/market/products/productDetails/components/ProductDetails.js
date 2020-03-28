import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Image, Button, Carousel, Row, Col, Container } from "react-bootstrap";
import '../styles/ProductDetails.css';
import FeaturedProducts from '../../featuredProducts/components/FeaturedProducts';
import ProductProvider from '../../providers/ProductProvider';

const ProductDetails = (props) => {

    const messages = useSelector(state => state.languages.messages);
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const productId = (window.location.pathname).split('/')[2]
            ProductProvider.getProductById(productId).subscribe(({ status, data }) => {
                if (status === 200) {
                    setProduct(data)
                    setImages(data.images)
                }
            });
        }
        fetchData();
    }, [props.location.pathname]);

    return (
        <div>
            <Container>
                <Row style={{ width: 'auto' }}>
                    <Col lg={3}>
                        <Carousel >
                            {images.map((productImage) =>
                                <Carousel.Item key={productImage.image}>
                                    <Image
                                        width="250"
                                        height="250"
                                        src={productImage.image}
                                    />
                                </Carousel.Item>)
                            }
                        </Carousel>
                    </Col>
                    <Col lg={8}>
                        <h3>{messages['product_details_product_name']}: {product.name}</h3>
                        <h3>{messages['product_details_product_price']}: $ {product.price}</h3>
                        <h5>{messages['product_details_product_description']}: {product.long_description}</h5>
                        <Button className="button" variant="dark">{messages['product_details_product_buy']}</Button>
                    </Col>
                </Row>
            </Container>
            <Col>
                <FeaturedProducts />
            </Col>
        </div>

    )
}

export default ProductDetails;
