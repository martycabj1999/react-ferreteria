import React from 'react';
import Slider from './Slider';
import Categories from '../../categories/Categories';
import FeaturedProducts from '../../products/featuredProducts/FeaturedProducts';
import ListProducts from '../../products/listProducts/ListProducts';
import Products from '../../products/ABMproducts/Products';

const Home = () => {
    return ( 
    <div>
        <Slider />
        <Categories />
        <FeaturedProducts />
        <ListProducts />
        <Products />
    </div>
    );
}
 
export default Home;