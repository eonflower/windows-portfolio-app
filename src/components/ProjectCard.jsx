import React from "react";

export default function ProjectCard(props) {
// const original = !props.original ? "" : `original`

    return (
        <div className="card-container">
             <div className="project-card">
            <span>
            <img className="project-img" src={props.img} alt="project screenshot" />
            </span>
            <span className="project-text">
                <h2 className="project-title">{props.project}</h2>
                <p>{props.description}</p>
                <p>utilized: {props.tech}</p>
                <span className="project-links">
                <a className="code-link" href={props.github}>view code</a>
                <a className="deploy-link" href={props.deploy}>view live</a>
                <a className="original-link" href={props.original}>{!props.original ? "" : "original"}</a>
            </span>
            </span>
    
        </div>
        
        </div>
       
    )
}