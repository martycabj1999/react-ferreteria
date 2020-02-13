import React from 'react';
import './UpperNavbar.css';

const UpperNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg upper-navbar">
            <div className="container">
                <a 
                    href="/" 
                    className="display-4" 
                    id="logo">
                    Ferreteria
                </a>
                <form className="form-inline">
                    <div className="input-group main-search">
                        <input 
                            className="form-control"
                            id="search"
                            type="search" 
                            placeholder="Que estas buscando? Ejemplo: Tornillos" 
                        />
                        <div className="input-group-append">
                            <button 
                                className="input-group-text btn btn-outline-primary" 
                                type="sumbit">
                                Buscar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default UpperNavbar;