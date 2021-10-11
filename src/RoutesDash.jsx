import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { ToastContainer } from 'react-toastify'

import Home from '../src/components/home/Home'
import UserCrud from '../src/components/user/UserCrud'
import AppHeader from '../src/components/application/AppHeader.jsx'
import AppDataGrid from '../src/components/application/AppDataGrid.jsx'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/applications' component={AppHeader} />
        <Route path='/tables' component={AppDataGrid} />
        <Redirect from='*' to='/' />
    </Switch>