import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "./categories.css";
//services
import CategoryService from '../../services/CategoryService';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        await CategoryService.getCategories().subscribe(({ status, data }) => {
            setCategories(data);
        });
    }, []);

    const listCategories = categories.map((category) =>
        <div className='product'>
            <Image roundedCircle
                src={category.image}
            />
            <h6>{category.name}</h6>
        </div>
    );

    return (
        <div className="categories-container">
            <div className="tittle">
                <h4>Categorias destacadas</h4>
            </div>

            <div class='scroll'>
                {listCategories}
            </div>
        </div>
    )
}

export default Categories;
