import React, { Fragment } from 'react';
import Footer from './footer/pages/Footer';
import Header from './header/components/Header';
import NavigationBar from './navbar/components/NavigationBar';

const Layout = ({ children }) => (
    <Fragment>
      <header>
        <Header />
        <NavigationBar />
      </header>
      {children}
      <Footer />
    </Fragment>
  );

export default Layout;