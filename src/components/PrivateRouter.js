import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isLogin(){

    const dataLocalStorage = JSON.parse(window.localStorage.getItem('labNotes'));
    
    return dataLocalStorage && Object.keys(dataLocalStorage).length;
};

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;
