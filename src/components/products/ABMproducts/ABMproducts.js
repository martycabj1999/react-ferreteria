import React, { Fragment } from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './ABMproducts.css';

const ABMproducts = () => {
    return (
        <div className="abm-container">
            <div className="button">
                <Link to="/nuevo">
                    <Button>Agregar productos</Button>
                </Link>
            </div>

            <div className="body">
                <Fragment>
                    <h2>Listado de Productos</h2>

                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody></tbody>
                    </table>
                </Fragment>
            </div>
        </div>
    )
}

export default ABMproducts;
