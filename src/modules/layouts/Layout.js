import React, { Fragment } from 'react';
import Footer from './footer/pages/Footer';
import Header from './header/components/Header';
import CustomNavbar from './navbar/components/CustomNavbar';

const Layout = ({ children }) => (
    <Fragment>
      <header>
        <Header />
        <CustomNavbar />
      </header>
      {children}
      <Footer />
    </Fragment>
  );

export default Layout;