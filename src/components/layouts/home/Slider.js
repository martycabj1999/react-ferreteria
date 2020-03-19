import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {

    const items = [
        {
            id: 1,
            src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Green-solid-color-wallpaper-hd-wallpapers.jpg',
            alt: 'Primer imagen',
            title: 'Primer imagen',
            caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            id: 2,
            src: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Green-solid-color-wallpaper-hd-wallpapers.jpg',
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
        <Carousel>
            {carouselItems}
        </Carousel>
    )
}

export default Slider
