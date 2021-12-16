import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../../global.css'
import "./styles.css"

import TwitterIcon from '../../icons/TwitterIcon'
import GithubIcon from '../../icons/GithubIcon'

const MobileMenu = ({active, setActive}) => {
    return(
        <nav className={active ? "mobile-menu" : "mobile-menu none"}>
            <span 
            onClick={()=>{setActive(!active)}}
            className="material-icons close-icon"
            >
                close
            </span>
            <ul>
                <li><NavLink to={{pathname: ''}}>Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="social-media">
                <a href="/"><TwitterIcon /></a>
                <a href="/"><GithubIcon /></a>
            </div>
        </nav>
    )
}

export default MobileMenu;