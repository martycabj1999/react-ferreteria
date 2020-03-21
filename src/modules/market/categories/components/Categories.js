import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "../style/categories.css";
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'

//services
import CategoryService from '../services/CategoryService';

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
                src="https://www.elempleo.com/resources/Content/dist/images/areas/persons/Pda/ejemplo-01.svg"
            />
            <h6>{category.name}</h6>
        </div>
    );

    const noCategories = <div className='alert alert-danger text-center mt-4'>No hay categorias por el momento</div>

    return (
        <Typography style={{color: currentColors.textSecondary}}>
            <div style={{
                backgroundColor: currentColors.colorSecondary
                }} className="categories-container">
                <div className="tittle">
                    <h4>Categorias destacadas</h4>
                </div>

                <div className='scroll'>
                    {listCategories}
                </div>
                {categories.length > 0 ? listCategories : noCategories}
            </div>
        </Typography>

    )
}

export default Categories;
