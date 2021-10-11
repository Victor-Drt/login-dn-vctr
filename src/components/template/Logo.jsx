import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src='https://download.logo.wine/logo/Denso/Denso-Logo.wine.png' alt='logo' />
        </Link>
    </aside>