import React from 'react';
import Slider from '../components/Slider';
import Categories from '../../../market/categories/components/Categories';
import FeaturedProducts from '../../../market/products/featuredProducts/components/FeaturedProducts';
import ListProducts from '../../../market/products/listProducts/pages/ListProducts';
import Products from '../../../market/products/crudProducts/pages/Products';

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