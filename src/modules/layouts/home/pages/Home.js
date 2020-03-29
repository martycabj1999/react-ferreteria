import React from 'react';
import Slider from '../components/Slider';
import Categories from '../../../market/categories/components/Categories';
import FeaturedProducts from '../../../market/products/featuredProducts/components/FeaturedProducts';
import ListProducts from '../../../market/products/listProducts/pages/ListProducts';
import CustomizationProvider from '../../../customization/provider/CustomizationProvider';
import { useDispatch } from 'react-redux';
//Action de redux 
import { setColorsAction } from '../../../customization/colorPicker/store/ColorPickerActions';
import useGeolocation from 'react-hook-geolocation';

const Home = () => {

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();
    const geolocation = useGeolocation();

    CustomizationProvider.getCustomization().subscribe(({ status, data }) => {
        if (status === 200) {
            const colorPicker = {
                colorPrimary: data[0].color_primary,
                colorSecondary: data[0].color_secondary,
                textPrimary: data[0].text_primary,
                textSecondary: data[0].text_secondary
            }
            localStorage.setItem('colors', JSON.stringify(colorPicker))
            localStorage.setItem('geolocation', JSON.stringify(geolocation))
            dispatch(setColorsAction(colorPicker));
        }
    });

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