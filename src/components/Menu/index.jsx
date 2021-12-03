import React, {useEffect, useState} from 'react'
import '../../global.css'
import "./styles.css"

import MobileMenu from '../MobileMenu'

const Menu = () =>{
    const [isActive, setIsActive] = useState(false);
    return(
        <nav className="menu">
            <h1 className="logo">María Morán</h1>
            <span 
            onClick={()=>{setIsActive(!isActive)}}
            className="material-icons menu-icon">
                menu
            </span>
            <ul className="navegation-menu-desktop">
                <li><a href="#cover">Cover</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <MobileMenu active={isActive} setActive={setIsActive}/>
        </nav>
    )
}

export default Menu;