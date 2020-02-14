import React from 'react'

const Dropdown = ({ name, list }) => {
    return (
        <div className="dropdown show">
            <button className="btn dropdown-toggle" id="item" data-toggle="dropdown">
                {name}
            </button>
            <div className="dropdown-menu" aria-labelledby="item">
                {list}
            </div>
        </div>
    )
}

export default Dropdown;
