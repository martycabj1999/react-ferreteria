import React from 'react';
import Slider from '../components/Slider';
import Categories from '../../../market/categories/components/Categories';
import FeaturedProducts from '../../../market/products/featuredProducts/components/FeaturedProducts';
import ListProducts from '../../../market/products/listProducts/pages/ListProducts';

const Home = () => {
    return ( 
    <div>
        <Slider />
        <Categories />
        <FeaturedProducts />
        <ListProducts />
    </div>
    );
}
 
export default Home;