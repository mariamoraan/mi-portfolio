import React from 'react'
import { Link } from 'react-router-dom';
import '../../global.css'
import "./styles.css"

import Card from '../Card';
import Blob from '../../icons/Blob';
import Ilustration from '../../icons/Ilustration';




const Cover = () =>{
    return(
        <section className="cover-section" id="cover">
            <Blob />
            <div className="cover-left">
                <Ilustration />
                <h2>María Morán</h2>
                <h1>Software Engineer</h1>
                <p>
                    ¡Hola! Me llamo María Morán y soy Ingeniera Informática. En la universidad desarrollé una gran pasión por el diseño, que me permitió complementar
                    mis conocimeintos de programación y realizar varios proyectos interesantes de desarrollo web y móvil. Creo que el diseño y la ingeniería deben ir de 
                    la mano para lograr productos eficientes, usables y que causen impacto en las personas. 
                </p>
                <Link to="/about" >Saber más</Link>
            </div>
            <div className="cover-right">
                <Card type={"twitter"} text={"@_mariamoraan"} link={"https://twitter.com/_mariamoraan"}/> 
                <Card type={"github"} text={"mia-moran"} link={"https://github.com/mia-moran"}/> 
                <Card type={"linkedin"} text={"María Morán Luaces"} link={"https://www.linkedin.com/in/maria-moran-luaces/"}/> 
            </div>
            
                
           
        </section>
    )
    
    
    
}

export default Cover;