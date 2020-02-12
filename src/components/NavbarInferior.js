import React from 'react';
import Dropdown from './Dropdown';

const NavbarInferior = (props) => {
    // Categorias, marcas y rubros
    const { categories, brands, sections } = props;

    const listCategories = categories.map((category) =>
        <a href={category.url} className="dropdown-item">{category.name}</a>
    );

    const listBrands = brands.map((brand) =>
        <a href={brand.url} className="dropdown-item">{brand.name}</a>
    );
    
    const listSections = sections.map((section) =>
        <a href={section.url} className="dropdown-item">{section.name}</a>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mt-n4">
                <li className="nav-item">
                    <Dropdown show="Categorias" list={listCategories} />
                </li>
                <li className="nav-item">
                    <Dropdown show="Marcas" list={listBrands} />
                </li>
                <li className="nav-item">
                    <Dropdown show="Rubros" list={listSections} />
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