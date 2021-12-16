import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import '../../global.css'
import "./styles.css"

import MobileMenu from '../MobileMenu'

const Menu = () =>{
    const [isActive, setIsActive] = useState(false);
    const [actual, setActual] = useState(window.location.pathname)
    return(
        <nav className="menu">
            <h1 className="logo">María Morán</h1>
            <span 
            onClick={()=>{setIsActive(!isActive)}}
            className="material-icons menu-icon">
                menu
            </span>
            <ul className="navegation-menu-desktop">
                <li><NavLink activeClassName="active" to={{pathname: ''}}>Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active" >About</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                <li><a href="/" activeClassName="active">Contact</a></li>
            </ul>
            <MobileMenu active={isActive} setActive={setIsActive}/>
        </nav>
    )
}

export default Menu;