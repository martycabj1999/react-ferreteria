import React from 'react';
import Slider from './Slider';
import Categories from '../../categories/Categories';
import FeaturedProducts from '../../products/FeaturedProducts';
import ListProducts from '../../products/ListProducts';
import ABMproducts from '../../products/ABMproducts/ABMproducts';

const Home = () => {
    return ( 
    <div>
        <Slider />
        <Categories />
        <FeaturedProducts />
        <ListProducts />
        <ABMproducts />
    </div>
    );
}
 
export default Home;