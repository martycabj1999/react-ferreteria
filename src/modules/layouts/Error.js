import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => (
    <div className='alert alert-danger text-center mt-4'>
        {mensaje}
    </div>
);

export default Error;