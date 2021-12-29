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
                <li onClick={() => {setActive(!active)}}><NavLink to={{pathname: ''}}>Home</NavLink></li>
                <li onClick={() => {setActive(!active)}}><NavLink to="/about" >About</NavLink></li>
                <li onClick={() => {setActive(!active)}}><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li onClick={() => {setActive(!active)}}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="social-media">
                <a href="https://twitter.com/_mariamoraan" target="_blank"><TwitterIcon /></a>
                <a href="https://github.com/mia-moran" target="_blank"><GithubIcon /></a>
            </div>
        </nav>
    )
}

export default MobileMenu;