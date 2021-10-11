import React from 'react';
import { isAuthenticated } from './login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import { ToastContainer } from 'react-toastify';
import AppDash from './AppDash';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{ pathname: '/', state: { from : props.location } }} />
        )
    )}
    />
)

//definindo rotas
const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => [<Login/>, <ToastContainer/>]}/>
            <PrivateRoute  path="/app" component={() => <AppDash/>}/>
            {/* <PrivateRoute  path="/app" component={() => <h1>Voce esta logado! <Link to="/" target="_top">logout</Link></h1>}/> */}
        </Switch>
    </BrowserRouter>
);

export default Rotas;