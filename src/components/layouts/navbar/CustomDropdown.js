import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CustomDropdown = ({ title, list }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle as="ul">
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu as="li">
                {list}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CustomDropdown;