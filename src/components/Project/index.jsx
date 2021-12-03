import React, {useEffect, useState} from 'react'
import '../../global.css'
import "./styles.css"


const Project = ({img, name, text, url}) => {
    
    return(
        <div className="project">
            <img className="project-main-image" src={img} alt="" />
        </div>
    )
}

export default Project;