import React, {useEffect, useState} from 'react'
import '../../global.css'
import "./styles.css"

import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'

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
                <li><a href="#cover">Cover</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="social-media">
                <a href="/"><img src={twitter} alt="Follow me on Twitter"/></a>
                <a href="/"><img src={github} alt="Look at my Github"/></a>
            </div>
        </nav>
    )
}

export default MobileMenu;