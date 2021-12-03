import React, {useEffect, useState} from 'react'
import '../../global.css'
import "./styles.css"

import Card from '../Card';
import Blob from '../../icons/blob';




const Cover = () =>{
    return(
        <section className="cover-section" id="cover">
            <Blob/>
            <Blob width="400px" height="400px"/>
            <div className="cover-left">
                <h2>María Morán</h2>
                <h1>Software Engineer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio rem recusandae assumenda, voluptatum sunt amet saepe tenetur. Fuga nesciunt, labore iusto adipisci quos asperiores molestiae aut illo perferendis officiis?</p>
            </div>
            <div className="cover-right">
                <Card/> 
            </div>
            
                
           
        </section>
    )
    
    
    
}

export default Cover;