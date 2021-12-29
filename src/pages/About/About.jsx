import React from 'react'
import './styles.css'

import Text from '../../components/Text'

const About = () => {
    return(
        <section id="about" className="page">
            <Text 
                title1 = "¿Quién soy?"
                text = "Hola, mi nombre es María Morán. En 2021 me gradué en la Universidad Carlos III de Madrid, convirtiéndome, oficialmente, en Ingeniera Informática. El camino hasta aquí ha estado lleno de prácticas aparentemente imposibles, proyectos personales, voluntariados, concursos y, sobre todo, gente maravillosa. Ahora trato de llevar un poco de mí y de lo que sé a los demás, y por eso estoy construyendo un blog que complemento con mi actividad en redes sociales. Tengo muchas ganas de seguir por este camino que acabo de comenzar y ver hasta dónde me lleva."
            />
            <Text 
                title1 = "Mi recorrido"
                text = "Con 15 añitos y sin tener muy claro aún quién era yo, descubrí la programación. Vi en ello una herramienta increible para resolver problemas. Aún no entendía completamente su potencial, pero ya tenía la curiosidad. Unos años más tarde, a los 17, con selectividad a la vuelta de la esquina, debía escoger qué iba a hacer el siguiente año. Fue entonces cuando descubrí el mundo de las ingenierías y, de nuevo, me topé con la programación. Vi en la Ingeniería Informática mi oportunidad de diseñar soluciones a problemas reales utilizando esa gran herramienta que había descubierto con 15 años." 
            />
            <Text 
                title1 = "Mi pasión"
                text = "Resolver problemas reales y facilitar la vida de las personas ha sido, desde siempre, mi pasión, y gracias a la ingeniería y la programación, puedo dedicarme a ello. Creo en el desarrollo de software como un proceso de empatía con el usuario, un acercamiento al mismo y una comprensión profunda de sus deseos y necesidades. Absolutamente todo en mis proyectos personales, desde el diseño a las funcionalidades, están dirigidas por esa visión que tengo del desarrollo de software." 
            />
            <Text 
                title1 = "Mi camino"
                text = "Estoy dando mis primeros pasos en el mundo profesional. Tengo mi primer trabajo como Software Engineer en Twilio y me veo crecer día a día. Además continúo desarrollando proyectos personales que me apasionan y me permiten mejorar mis habilidades constantemete. Llevar parte de mí a los demás está siendo una parte vital del proceso, me gusta poder transmitir mi conocimiento y beneficiarme del feedback de la comunidad. Creo que estoy en el camino correcto y quiero ver hasta donde me lleva." 
            />
        </section>
    )
}

export default About;