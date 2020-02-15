import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import firstSliderImage from './img/slider1.jpg';
import secondSliderImage from './img/slider2.jpg';
import thirdSliderImage from './img/slider3.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={firstSliderImage}
                    alt="First slide"
                    id="img"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={secondSliderImage}
                    alt="Second slide"
                    id="img"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={thirdSliderImage}
                    alt="Third slide"
                    id="img"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
