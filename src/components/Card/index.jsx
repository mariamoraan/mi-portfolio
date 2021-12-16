import React from 'react'
import './styles.css';

import TwitterIcon from '../../icons/TwitterIcon';
import GithubIcon from '../../icons/GithubIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';

const Card = ({type="twitter", text="JOLA", link='/'}) => {
    const renderType = {
        'twitter':<TwitterIcon />,
        'github':<GithubIcon />,
        'linkedin':<LinkedinIcon />,
    }[type]
    return(
        <a target="_blank" href={link} className="card">
            {renderType}
            {text}
        </a>
    );
}

export default Card;