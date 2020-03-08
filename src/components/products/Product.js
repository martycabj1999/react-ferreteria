import React from 'react'
import { Image, Button } from "react-bootstrap";

const Product = (props) => {
    return (
        <div className="product">
            <Image thumbnail
                src={props.image}
            />
            <h4>Precio: ${props.price}</h4>
            <Button variant="dark">Comprar</Button>
        </div>
    )
}

export default Product;

