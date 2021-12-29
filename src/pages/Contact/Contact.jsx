import React from 'react'
import './styles.css'
import Card from '../../components/Card'

const Contact = () => {
    return(
        <section id="contact" class="page">
            <div class="contact-cards">
                <Card type={"twitter"} text={"@_mariamoraan"} link={"https://twitter.com/_mariamoraan"}/> 
                <Card type={"github"} text={"mia-moran"} link={"https://github.com/mia-moran"}/> 
                <Card type={"linkedin"} text={"María Morán Luaces"} link={"https://www.linkedin.com/in/maria-moran-luaces/"}/> 
            </div>
            <div class="contact-message">
                <h1>Hey !</h1>
                <p>Contáctame a través de mis redes sociales o a través de mi email</p>
                <Card type={"mail"} text={"mariamoranluaces@gmail.com"} link={"mailto:mariamoranluaces@gmail.com"}/>
            </div>
        </section>
    )
}

export default Contact;