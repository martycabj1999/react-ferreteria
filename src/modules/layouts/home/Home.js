import React from 'react';
import Slider from './Slider';
import Categories from '../../market/categories/components/Categories';
import FeaturedProducts from '../../market/products/featuredProducts/FeaturedProducts';
import ListProducts from '../../market/products/listProducts/ListProducts';
import Products from '../../market/products/ABMproducts/components/Products';

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