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
                <li><NavLink activeclassname="active" to={{pathname: ''}}>Home</NavLink></li>
                <li><NavLink to="/about" activeclassname="active" >About</NavLink></li>
                <li><NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            </ul>
            <MobileMenu active={isActive} setActive={setIsActive}/>
        </nav>
    )
}

export default Menu;