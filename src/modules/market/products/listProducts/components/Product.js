import React from 'react'
import { Image, Button } from "react-bootstrap";

const Product = (props) => {
    return (
        <div style={{width: 'auto'}}>
            <Image thumbnail style={{maxWidth:'200'}}
                src={props.src}
            />
            <h3>Precio: ${props.price}</h3>
            <Button variant="dark">Comprar</Button>
        </div>
    )
}

export default Product;

