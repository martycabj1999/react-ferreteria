import React from 'react';

const NavbarInferior = (props) => {

    const { categories } = props;
    
    const listCategories = categories.map((category) =>
        <a href={category.url} className="dropdown-item">{category.name}</a>
    );
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mt-n4">
                <li className="nav-item">
                    <div className="dropdown show">
                        <button className="btn dropdown-toggle" id="categories" data-toggle="dropdown">
                            Categorias
                        </button>
                        <div className="dropdown-menu" aria-labelledby="categories">
                            {listCategories}
                        </div>
                    </div>
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