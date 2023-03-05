import React from "react";
import { useParams } from "react-router-dom";
import {projects} from '../../datapl';
import "./displayProjects.css";
import stickordielogo from "../../img/stickordielogo.png";
import ReactPlayer from 'react-player';


const DisplayProjects = () => {
    const { id } = useParams();
    const project = projects[id];
    return (
    <div className="project">

        <h1>{project.name}</h1>
        {id === "0" && (
        <div className="logo-stickordie">
            <img src={stickordielogo} />
        </div>
        )}
        <img src={project.logoImg} />
        <p>
            <b>Description: </b> {project.description}
        </p>
        <h1>{project.header}</h1>
        {id === "0" && (
        
         <ReactPlayer url={project.videoUrl} controls className="video-stickordie"/>
        
        )}
        {id === "1" && (
        <div className="video-container">
            <ReactPlayer url={project.videoUrl} controls className="video"/>
            <ReactPlayer url={project.videoUrl2} controls className="video"/>
        </div>
        )}
    </div>
    );
};

export default DisplayProjects;