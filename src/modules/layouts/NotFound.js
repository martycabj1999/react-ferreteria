import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const NotFound = () => {
    
    const messages = useSelector(state => state.languages.messages);

    return ( 
        <Fragment>
            <div>
                <h1>{messages['not_found_text']}</h1>
            </div>
        </Fragment>
     );
}
 
export default NotFound;