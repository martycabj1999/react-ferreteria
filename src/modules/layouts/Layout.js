import React from 'react';
import Footer from './footer/pages/Footer';
import UpperNavbar from "./navbar/components/UpperNavbar";
import LowerNavbar from "./navbar/components/LowerNavbar";

const Layout = ({ children}) => {
    return (
        <div>
            <header>
                <UpperNavbar />
                <LowerNavbar />
            </header>
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;