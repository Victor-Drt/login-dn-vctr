import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem path='/home' icon='home' name='Início' />
            <NavItem path='/users' icon='users' name='Usuários'/>
            <NavItem path='/applications' icon='adn' name='Aplicações' />
            <NavItem path='/tables' icon='adn' name='DataGrid' />
        </nav>
    </aside>