import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'
import "./styles.css"
import db from "../../../firebase.config";

import Project from '../../components/Project';

const Projects = () => {
    const getProject = () => {
        db.collection('projects').limit(3).get().then((s)=>{
            var items = [];
            s.forEach(e=>{
                items.push({id:e.id, data:e.data()})
            })
            setProjects(items);
        })
    }
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        getProject();
    },[])
    return(
        <section className="projects-section">
            <div className="projects-section-info">
                <h1>Conoce mis proyectos</h1>
            </div>
            <div className="projects-container">
                {
                    projects.map(project => (
                        <Link key={project.id} to={{pathname:'/project-info/' + project.id}}>
                            <Project img={project.data.img} name={project.data.name} text={project.data.text} url={project.data.url} type="short"/>
                        </Link>
                    ))
                }
            </div>
            <div className="projects-link">
                <h1>Puedes ver más proyectos míos aquí</h1>
                <Link to="/portfolio">Ver todo</Link>
            </div>
        </section>
            
        
    
    )
}

export default Projects;
