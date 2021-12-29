import React from 'react'
import './styles.css'

const Text = ({title1, title2, text}) => {
    return(
        <div className="text">
            {title1 ? <h1>{title1}</h1> : ''}
            {title2 ? <h2>{title2}</h2> : ''}
            {text ? <p>{text}</p> : ''}
        </div>
    )
}

export default Text;