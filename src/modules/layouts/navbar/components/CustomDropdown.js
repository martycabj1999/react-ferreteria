import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomDropdown = ({ title, list }) => (
  <Dropdown>
    <Dropdown.Toggle as="ul">
      {title}
    </Dropdown.Toggle>
    <Dropdown.Menu as="li">
      {list}
    </Dropdown.Menu>
  </Dropdown>
);

CustomDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.isRequired
}

export default CustomDropdown;