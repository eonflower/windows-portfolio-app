import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function About() {
    return (
    <div>
        <h2 className="about-title"><FontAwesomeIcon icon={faPagelines} flip="horizontal" /> a little about me <FontAwesomeIcon icon={faPagelines} /></h2>
        <p className="about-text">With a knack for problem-solving and the drive for adventure, I find myself deep-diving into problems and thriving with creative solutions. As a web developer, I bring the spark of an artist and the eye for details, consistently striving towards the most optimized user-experience. I believe in compassion for all, and love to challenge the status quo to continually cultivate more accessible and inclusive spaces for people of all diversities.</p>
        <br />
        <h2 className="about-title"><FontAwesomeIcon icon={faCode} /> technologies I work with lately <FontAwesomeIcon icon={faCode} /></h2>
        <span className="tech">
        <a href="https://www.w3schools.com/js/" className="about-tech">JavaScript</a>
        <a href="https://www.npmjs.com/package/react" className="about-tech">React</a>
        <a href="https://www.w3schools.com/html/" className="about-tech">HTML</a>
        <a href="https://www.w3schools.com/css/" className="about-tech">CSS</a>
        <a href="https://www.npmjs.com/package/axios" className="about-tech">Axios</a>
        <a href="https://git-scm.com/" className="about-tech">Git</a>
        <a href="https://github.com/" className="about-tech">Github</a>
        <a href="https://www.npmjs.com/package/react-bootstrap" className="about-tech">Bootstrap</a>
        <a href="https://www.npmjs.com/package/lodash" className="about-tech">Lodash</a>
        <a href="https://vitejs.dev/" className="about-tech">Vite</a>
        </span>
        <p className="about-text special">I specialize in frontend developing, but have experience working with Express and mongoDB for backend.</p>
        <br />
        <h2 className="about-title"><FontAwesomeIcon icon={faHeart} /> my hobbies <FontAwesomeIcon icon={faHeart} /></h2>
        <ul className="hobbies">
        <li className="hobby-text">rock climbing</li>
        <li className="hobby-text">long distance backpacking</li>
        <li className="hobby-text">painting/block printing</li>
        <li className="hobby-text">photography</li>
        <li className="hobby-text">music</li>
        <li className="hobby-text">traveling</li>
        <li className="hobby-text">van/trailer renovations</li>
        </ul>
        

    </div>
    )
}