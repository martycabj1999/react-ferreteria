import React from 'react'

const Dropdown = (props) => {

    const { show, list } = props;

    return (
        <div className="dropdown show">
            <button className="btn dropdown-toggle" id="item" data-toggle="dropdown">
                {show}
            </button>
            <div className="dropdown-menu" aria-labelledby="item">
                {list}
            </div>
        </div>
    )
}

export default Dropdown;
