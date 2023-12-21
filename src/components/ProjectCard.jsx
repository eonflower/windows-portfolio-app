import React from "react";

export default function ProjectCard(props) {
    const isVideo = props.img.endsWith(".mp4");

    return (
        <div className="card-container">
        <div className="project-card">
            <span>
            {isVideo ? (
                <div className="video-container">
                <video src={props.img} controls />
                </div>
            ) : (
                <div
                className="project-img"
                style={{ backgroundImage: `url(${props.img})` }}
                />
            )}
            </span>
            <span className="project-text">
            <h2>{props.project}</h2>
            <p>{props.description}</p>
            <p>tech stack: {props.tech}</p>
            <span className="project-links">
                <a href={props.github}>
                view code
                </a>
                <a href={props.deploy}>
                {!props.deploy ? "" : "view live"}
                </a>
            </span>
            </span>
        </div>
        </div>
    );
}
