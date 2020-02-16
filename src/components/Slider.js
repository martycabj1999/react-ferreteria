import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import firstSliderImage from './img/slider1.jpg';
import secondSliderImage from './img/slider2.jpg';

const Slider = () => {

    const items = [
        {
            src: firstSliderImage,
            alt: 'Primer imagen',
            title: 'Primer imagen',
            caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            src: secondSliderImage,
            alt: 'Segunda imagen',
            title: 'Segunda imagen',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    const carouselItems = items.map((item) =>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={item.src}
                alt={item.alt}
                id="img"
            />
            <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

    return (
        <Carousel>
            {carouselItems}
        </Carousel>
    )
}

export default Slider
