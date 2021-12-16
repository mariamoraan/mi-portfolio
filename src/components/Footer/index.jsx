import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <nav>
                <ul>
                    <li><Link to={{pathname: ''}}>Cover</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;