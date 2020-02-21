import React from 'react';
import Categories from '../../categorias/Categories';
import FeaturedProducts from '../../featured_products/FeaturedProducts';
import Slider from '../../Slider';

const Home = () => {
    return ( 
    <div>
        <Slider />
        <Categories/>
        <FeaturedProducts/>
    </div>
    );
}
 
export default Home;