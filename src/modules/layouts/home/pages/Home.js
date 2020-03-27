import React from 'react';
import Slider from '../components/Slider';
import Categories from '../../../market/categories/components/Categories';
import FeaturedProducts from '../../../market/products/featuredProducts/components/FeaturedProducts';
import ListProducts from '../../../market/products/listProducts/pages/ListProducts';
import CustomizationProvider from '../../../customization/provider/CustomizationProvider';
import { useDispatch } from 'react-redux';
//Action de redux 
import { setColorsAction } from '../../../customization/colorPicker/store/ColorPickerActions';

const Home = () => {

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    CustomizationProvider.getCustomization().subscribe(({ status, data }) => {
        if (status === 200) {
            const colorPicker = {
                colorPrimary: data[0].color_primary,
                colorSecondary: data[0].color_secondary,
                textPrimary: data[0].text_primary,
                textSecondary: data[0].text_secondary
            }
            localStorage.setItem('colors', JSON.stringify(colorPicker))
            dispatch(setColorsAction(colorPicker));
            console.log('exito');
        } else {
            console.log('error en el register');
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