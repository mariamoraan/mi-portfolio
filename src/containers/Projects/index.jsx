import React, {useEffect, useState} from 'react'
import '../../global.css'
import "./styles.css"
import db from "../../../firebase.config";

import Project from '../../components/Project';

const Projects = () => {
    const getProject = () =>{
        db.collection('projects').get().then((s)=>{
            var items = [];
            s.forEach(e=>{
                console.log(e.id);
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
                        <Project key={project.id} img={project.data.img} name={project.data.name} text={project.data.text} url={project.data.url}/>
                    ))
                }
            </div>
        </section>
            
        
    
    )
}

export default Projects;
