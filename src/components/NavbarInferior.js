import React, { useState } from 'react';

const NavbarInferior = () => {

    const [categoria, setCategoria] = useState({
        name : '',
        url : ''
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mt-n4">
                <li className="nav-item">
                    <a href="" className="nav-link">Categorias</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Contactanos</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Registrate</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Iniciar Sesion</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarInferior;