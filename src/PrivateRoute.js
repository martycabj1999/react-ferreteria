import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, roles, ...rest}) => {
 
    let user = useSelector(state => state.security.user);
    
    /*const validationToken = (user) => { 
        if (user.exp) { 
            let dateNow = new Date(); 
            let dateToken = new Date(user.exp * 1000) 
            if (dateNow > dateToken) { 
                return false } 
        } 
        return true;
    }*/

    const isAuthorized = () => {
         
        if (user.id) {
            console.log('pasa')
            return true;
        }
        
        console.log('no pasa')
        return false;
    }

    return (
        <Route {...rest} render={props => (
            isAuthorized() ?
                <Component {...props} />
            : <Redirect to="/unauthorized"/>
        )} />
    );
};

export default PrivateRoute;