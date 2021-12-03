import React from 'react'
import './styles.css';

import me from '../../assets/me.jpg';

const Card = () => {
    return(
        <div className="card">
            <img src={me} alt="me" />
            <div className="card-info">
                <a href="https://api.whatsapp.com/send?phone=34681050945" target="_blank">
                    <span className="material-icons-outlined icon">call</span>
                    <span>+34 681 0509 45</span>
                </a>
                <a href="mailto:mariamoranluaces@gmail.com" target="_blank">
                <span className="material-icons-outlined icon">email</span>
                <span>mariamoranluaces@gmail.com</span>
                </a>
            </div>
            <a className="card-button">Descarga mi CV</a>   
        </div>
    );
}

export default Card;