import React from "react";
import goblin from "../img/goblin.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHiking, faMountainSun, faPalette, faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
    <div className="home-wrapper">
        <img className="pfp" src={goblin} alt="photo of me" />
        <span className="home-welcome">
        <h2>hey there, i'm aloe <FontAwesomeIcon icon={faSeedling} /></h2>
        <h3>(they/them)</h3>
        <h4>web developer • artist • climber • backpacker</h4>
        <h4>welcome to my page!</h4>
        <h2 className="home-icons"><FontAwesomeIcon className="icon" icon={faCode} /> <FontAwesomeIcon className="icon" icon={faPalette} /> <FontAwesomeIcon className="icon" icon={faMountainSun} /> <FontAwesomeIcon className="icon" icon={faHiking} /></h2>
        </span>
    </div>
    )
}