import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    return (
    <div>
        <h2 className="about-title"><FontAwesomeIcon icon={faPagelines} flip="horizontal" /> a little about me <FontAwesomeIcon icon={faPagelines} /></h2>
       <p className="about-text">With an act for problem-solving and the drive for adventure, I find myself deep-diving into problems and thriving with creative solutions. As a web developer, I bring the spark of an artist and the eye for details, consistently striving towards the most optimized user-experience. I believe in compassion for all, and love to challenge the status quo to continually cultivate more accessible and inclusive spaces for people of all diversities.</p> 
    </div>
    )
}