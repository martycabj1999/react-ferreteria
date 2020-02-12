import React from 'react';

const NavbarSuperior = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container mt-4">
                <a 
                    href="/" 
                    className="navbar-brand h1" 
                    id="logo">
                    Ferreteria
                </a>
                <form className="form-inline">
                    <div className="input-group">
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Que estas buscando?" 
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

export default NavbarSuperior;