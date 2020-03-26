import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => (
    <div className='font-weigth-bold alert alert-danger text-center mt-4'>
        {mensaje}
    </div>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;