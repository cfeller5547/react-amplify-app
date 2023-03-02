import React from "react";
import { useParams } from "react-router-dom";
import {projects} from '../../datapl'
import "./displayProjects.css"
import playmediabtn from "../../img/playmediabtn.png";
import ReactPlayer from 'react-player'


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
        
        {id === "1" && (
        <div>
            <h1 style={{ textAlign: "center" }}>From Concept to Reality: Our App Journey</h1>
            <div className="video-container">
                <ReactPlayer url={project.videoUrl} controls className="video"/>
                <ReactPlayer url={project.videoUrl2} controls className="video"/>
            </div>
        </div>
        )}
    </div>
    );
};

export default DisplayProjects;