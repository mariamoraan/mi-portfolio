import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../../global.css'
import "./styles.css"
import db from "../../../firebase.config";
import GithubIcon from "../../icons/GithubIcon";


const ProjectInfo = () => {
    const { id } = useParams();
    const [project, setProject] = useState({name:'', text:'', url:'', img:'', git:''})
    const getProject = () => {
        db.collection('projects').doc(id).onSnapshot(p => {
            setProject(p.data());
        });
    }
    useEffect(()=>{
        getProject();

    },[])
    return(
        <div className="project-info">
            <div className="project-info-images">
                <img 
                src={project.img}
                />
            </div>
            <div className="project-info-text">
                <a href={project.git} className="project-info-icon" alt="Click to see the code on github"><GithubIcon /></a>
                <h1>{project.name}</h1>
                <p>{project.text}</p>
                {
                    project.url != '' ?
                    <a className="project-info-url" href={project.url} target="_blank">Ver projecto</a>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default ProjectInfo;