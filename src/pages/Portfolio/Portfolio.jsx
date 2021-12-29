import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import db from "../../../firebase.config";
import Project from '../../components/Project';
const Portfolio = () => {
    const getProjects = () => {
        db.collection('projects').get().then((s) => {
            var items = [];
            s.forEach(e=>{
                items.push({id:e.id, data:e.data()})    
            })
            setProjects(items);
        })
    }
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        getProjects();
    },[])
    return(
        <section id="portfolio" class="page">
            <div className="portfolio-container">
            {   
                projects.map(project => (
                    <Link key={project.id} to={{pathname:'/project-info/' + project.id}}>
                        <Project type={"large"} img={project.data.img} name={project.data.name} text={project.data.text} url={project.data.url}/>
                    </Link>
                ))
            }
            </div>
        </section>
    )
}

export default Portfolio;