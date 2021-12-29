import React, {useEffect, useState} from 'react'
import '../../global.css'
import "./styles.css"


const Project = ({img, name, text, url, type='medium'}) => {
    
    return(
        <div className={"project " + type}>
            <img className="project-main-image" src={img} alt="" />
        </div>
    )
}

export default Project;