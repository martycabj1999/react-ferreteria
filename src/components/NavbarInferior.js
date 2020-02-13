import React from 'react';
import Dropdown from './Dropdown';
import './NavbarInferior.css';

const NavbarInferior = (props) => {
    // Categorias, marcas y rubros
    const { categories, brands, sections } = props;

    const obtainLinks = array => (
        array.map((element) =>
            <a href={element.url} className="dropdown-item">{element.name}</a>
        )
    );

    const listCategories = obtainLinks(categories);
    const listBrands = obtainLinks(brands);
    const listSections = obtainLinks(sections);

    return (
        <nav className="navbar navbar-expand-md navbar-inferior">
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