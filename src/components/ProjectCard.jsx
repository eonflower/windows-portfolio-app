import React from "react";
import honey from "../img/honey-hits-vid.mp4"
import devTrip from "../img/dev-trip.mp4"
import chum from "../img/green.mp4"
import weather from "../img/weather.mp4"
import sunset from "../img/sunset.mp4"

export default function ProjectCard(props) {
// const original = !props.original ? "" : `original`

    return (
        <div className="card-container">
            <div className="project-card">
            <span>
            {/* <img className="project-img" src={props.img} alt="project screenshot" /> */}
            {props.img === chum?
            <div className="video-container">
                <video className="video" src={chum} controls />
            </div>
            :
            props.img === honey ?
            <div className="video-container">
                <video className="video" src={honey} controls />
            </div>
            :
            props.img === weather ?
            <div className="video-container">
                <video className="video" src={weather} controls />
            </div>
            :
            props.img === devTrip ?
            <div className="video-container">
                <video className="video" src={devTrip} controls />
            </div>
            :
            props.img === sunset ?
            <div className="video-container">
                <video className="video" src={sunset} controls />
            </div>
            :
            <div className="project-img" style={{backgroundImage: `url(${props.img})`}} />}
            </span>
            <span className="project-text">
                <h2 className="project-title">{props.project}</h2>
                <p>{props.description}</p>
                <p>utilized: {props.tech}</p>
                <span className="project-links">
                <a className="code-link" href={props.github}>view code</a>
                <a className="deploy-link" href={props.deploy}>{!props.deploy ? "" : "view live"}</a>
                {/* <a className="original-link" href={props.original}>{!props.original ? "" : "original"}</a> */}
            </span>
            </span>
    
        </div>
        
        </div>
    )
}