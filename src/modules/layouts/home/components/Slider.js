import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Slider.css';
import slider1 from '../../../../assets/slider-1.png';
import slider2 from '../../../../assets/slider-2.jpg';

const Slider = () => {

    const items = [
        {
            id: 1,
            src: slider1,
            alt: 'Primer imagen',
            title: 'Primer imagen',
            caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            id: 2,
            src: slider2,
            alt: 'Segunda imagen',
            title: 'Segunda imagen',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    const carouselItems = items.map((item) =>
        <Carousel.Item key={item.id}>
            <img
                className='d-block w-100'
                src={item.src}
                alt={item.alt}
                id='img'
            />
            <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );

    return (
        <Carousel className="slider-carousel">
            {carouselItems}
        </Carousel>
    )
}

export default Slider
