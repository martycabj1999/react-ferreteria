import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "./categories.css";
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'

//services
import CategoryService from '../../services/CategoryService';

const Categories = () => {

    const currentColors = useSelector(state => state.customization.colors);  

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData(){
            await CategoryService.getCategories().subscribe(({ status, data }) => {
                setCategories(data);
            });
        }

        fetchData();

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

    return (
<<<<<<< HEAD
        <div className="categories-container">
            <div className="tittle">
                <h4>Categorias destacadas</h4>
            </div>
            <div className='scroll'>
                {listCategories}
=======
        <Typography style={{
            color: currentColors.textSecondary
        }}>
            <div style={{
                backgroundColor: currentColors.colorSecondary
                }} className="categories-container">
                <div className="tittle">
                    <h4>Categorias destacadas</h4>
                </div>

                <div className='scroll'>
                    {listCategories}
                </div>
>>>>>>> be228daf7d9ec6e5fd1991bc60b0b6fb45d34cee
            </div>
        </Typography>

    )
}

export default Categories;
