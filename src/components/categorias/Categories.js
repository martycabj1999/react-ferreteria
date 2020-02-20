import React from "react"
import { Image, Button } from "react-bootstrap";
import "./categories.css";

const Categories = () => {

    const Categories = [
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        },
        {
            name: "Hidrolavadora",
            url_img: "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=50&w=50",
        }
    ]

    const listCategories = Categories.map((product) =>
        <div className='product'>
            <Image roundedCircle
                src={product.url_img}
            />
            <h6>{product.name}</h6>
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
