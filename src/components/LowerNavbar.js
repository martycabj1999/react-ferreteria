import React from 'react';
import Dropdown from './Dropdown';
//import './LowerNavbar.css';

const LowerNavbar = ({ categories, brands, sections, isLogued }) => {
    // Categorias, marcas y rubros
    const obtainLinks = array => (
        array.map((element) =>
            <a href={element.url} className="dropdown-item">{element.name}</a>
        )
    );

    const listCategories = obtainLinks(categories);
    const listBrands = obtainLinks(brands);
    const listSections = obtainLinks(sections);

    return (
        <nav className="navbar navbar-expand-md lower-navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Dropdown name="Categorias" list={listCategories} />
                </li>
                <li className="nav-item">
                    <Dropdown name="Marcas" list={listBrands} />
                </li>
                <li className="nav-item">
                    <Dropdown name="Rubros" list={listSections} />
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Contactanos</a>
                </li>
                <li className="nav-item">
                    <a href="/" hidden={isLogued} className="nav-link">Registrate</a>
                </li>
                <li className="nav-item">
                    <a href="/" hidden={isLogued} className="nav-link">Iniciar Sesion</a>
                </li>
                <li className="nav-item">
                    <a href="/" hidden={!isLogued} className="nav-link">Cerrar Sesion</a>
                </li>
            </ul>
        </nav>
    );
}

export default LowerNavbar;