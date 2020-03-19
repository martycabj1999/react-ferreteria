import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "./categories.css";
//services
import CategoryService from '../../services/CategoryService';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        CategoryService.getCategories().subscribe(({ status, data }) => {
            if (status === 200)
                setCategories(data);
        });
    }, []);

    const listCategories = categories.map((category) =>
        <div key={category.id} className='product'>
            <Image roundedCircle
                src="https://www.elempleo.com/resources/Content/dist/images/areas/persons/Pda/ejemplo-01.svg"
            />
            <h6>{category.name}</h6>
        </div>
    );

    const noCategories = <div className='alert alert-danger text-center mt-4'>No hay categorias por el momento</div>

    return (
        <div className="categories-container">
            <div className="tittle">
                <h4>Categorias destacadas</h4>
            </div>

            <div className='scroll'>
                {status === 200 && categories.length > 0 ? listCategories : noCategories}
            </div>
        </div>
    )
}

export default Categories;
