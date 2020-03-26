import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "../styles/categories.css";
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import logo from '../../../../assets/carretilla.png'

//services
import CategoryService from '../providers/CategoryProvider';

const Categories = () => {

    const currentColors = useSelector(state => state.customization.colors);  

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getCategories().subscribe(({ status, data }) => {
            if (status === 200)
                setCategories(data);
        });
    }, []);

    const listCategories = categories.map((category) =>
        <div style={{
            backgroundColor: currentColors.colorSecondary
            }} key={category.id} className='product'>
            <Image roundedCircle
                width="150"
                height="150"
                src={logo}
            />
            <h6>{category.name}</h6>
        </div>
    );

    const noCategories = <div className='alert alert-danger text-center mt-4'>No hay categorias por el momento</div>

    return (
        <div style={{backgroundColor: currentColors.colorSecondary}}>
            <div 
                style={{backgroundColor: currentColors.colorSecondary}} 
                className="categories-container"
            >
                <div className="tittle">
                    <h4 style={{color: currentColors.textSecondary}}>Categorias destacadas</h4>
                </div>

                <div style={{backgroundColor: currentColors.colorSecondary}}  className='scroll'>
                    {listCategories ? listCategories : noCategories}
                </div>
            </div>
        </div>
    )
}

export default Categories;
