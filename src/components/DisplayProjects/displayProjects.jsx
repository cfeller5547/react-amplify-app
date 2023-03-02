import React from "react";
import { useParams } from "react-router-dom";
import {projects} from '../../datapl'
import "./displayProjects.css"
import stickordielogo from "../../img/stickordielogo.png";
import ReactPlayer from 'react-player'
import StickOrDieVideo from "../../video/stickordievideo.mp4"

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
        <div className="video-stickordie-container">
            <ReactPlayer url={StickOrDieVideo} controls className="video-stickordie"/>
        </div>
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