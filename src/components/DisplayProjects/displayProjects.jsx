import React from "react";
import { useParams } from "react-router-dom";
import {projects} from '../../datapl'
import "./displayProjects.css"
import playmediabtn from "../../img/playmediabtn.png";

const DisplayProjects = () => {
    const { id } = useParams();
    const project = projects[id];
    return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.logoImg} />
        <p>
            <b>Description: </b> {project.description}
        </p>
        
    </div>
    );
}

export default DisplayProjects;