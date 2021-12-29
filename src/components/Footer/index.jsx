import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <nav>
                <ul>
                    <li><Link to={{pathname: ''}}>Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul>
                    <li><a href="https://twitter.com/_mariamoraan" target="_blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/maria-moran-luaces/" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/mia-moran" target="_blank">Github</a></li>
                    <li><a href="https://www.instagram.com/_miamoraan/" target="_blank">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;