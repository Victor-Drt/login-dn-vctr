import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import Logo from '../src/components/template/Logo'
import Nav from '../src/components/template/Nav'
import RoutesDash from './RoutesDash'
import Footer from '../src/components/template/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <RoutesDash />
            <NotificationContainer />
            <Footer />
        </div>
    </HashRouter>