import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "./categories.css";
//services
import CategoryService from '../../services/CategoryService';

const Categories = () => {

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
        <div key={category.id} className='product'>
            <Image roundedCircle
                src="https://www.elempleo.com/resources/Content/dist/images/areas/persons/Pda/ejemplo-01.svg"
            />
            <h6>{category.name}</h6>
        </div>
    );

    return (
        <div className="categories-container">
            <div className="tittle">
                <h4>Categorias destacadas</h4>
            </div>

            <div className='scroll'>
                {listCategories}
            </div>
        </div>
    )
}

export default Categories;
