import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomDropdown = ({ title, list }) => (
  <NavDropdown title={title} id="nav-dropdown">
    {list}
  </NavDropdown>
);

CustomDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.any.isRequired
}

export default CustomDropdown;