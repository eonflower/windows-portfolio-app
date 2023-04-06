import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines, faJs, faReact, faHtml5, faNodeJs, faGitAlt, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { TbBrandVite } from "react-icons/tb"
import { SiAxios } from "react-icons/si"
import { BsFiletypeJson } from "react-icons/bs"

export default function About() {
  return (
    <div>
      <h2 className='about-title'>
        <FontAwesomeIcon icon={faPagelines} flip='horizontal' /> a little about me <FontAwesomeIcon icon={faPagelines} />
      </h2>
      <p className='about-text'>
      I'm a problem-solving, adventure-seeking web developer with an eye for detail and a passion for 
      optimizing user experiences. Combining my love for art with technical skills, I strive to create 
      websites that are both beautiful and accessible for people of all backgrounds. I believe in 
      challenging the status quo and creating inclusive spaces both online and in the outdoors.

        {/* With a knack for problem-solving and the drive for adventure, I find
        myself deep-diving into problems and thriving with creative solutions.
        As a web developer, I bring the spark of an artist and the eye for
        details, consistently striving towards the most optimized
        user-experience. I believe in compassion for all, and love to challenge
        the status quo to continually cultivate more accessible and inclusive
        spaces for people of all diversities. */}
      </p>
      <h2 className='about-title tech-title'>
        <FontAwesomeIcon icon={faCode} /> technologies I work with lately{' '}
        <FontAwesomeIcon icon={faCode} />
      </h2>
      <span className='tech'>
        <a target="_blank" href='https://www.w3schools.com/js/' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faJs} />
        JavaScript 
        </a>
        <a target="_blank" href='https://www.npmjs.com/package/react' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faReact} />
        Reactjs
        </a>
        <a target="_blank" href='https://www.w3schools.com/html/' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
        HTML 
        </a>
        <a target="_blank" href='https://www.w3schools.com/css/' className='about-tech'>
        <i className="devicon-css3-plain tech-icon"></i>
        CSS3
        </a>
        <a target="_blank" href='https://nodejs.org' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
        Nodejs 
        </a>
        <a target="_blank" href='https://www.npmjs.com/' className='about-tech'>
        <i className="devicon-npm-original-wordmark tech-icon"></i>
        npm
        </a>
        <a target="_blank" href='https://www.npmjs.com/package/axios' className='about-tech'>
        <SiAxios className="tech-icon" />
        Axios 
        </a>
        <a target="_blank" href='https://git-scm.com/' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        Git
        </a>
        <a target="_blank" href='https://github.com/' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faGithub} />
        Github
        </a>
        <a target="_blank" href='https://www.npmjs.com/package/react-bootstrap' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faBootstrap} />
        Bootstrap 
        </a>
        <a target="_blank" href='https://www.mongodb.com/try' className='about-tech'>
        <i className="devicon-mongodb-plain tech-icon"></i>
        MongoDB
        </a>
        <a target="_blank" href='https://www.npmjs.com/package/express' className='about-tech'>
        <i className="devicon-express-original tech-icon"></i>
        Express
        </a>
        <a target="_blank" href='https://www.json.org/json-en.html' className='about-tech'>
        <BsFiletypeJson className="tech-icon" />
        JSON
        </a>
        <a target="_blank" href='https://vitejs.dev/' className='about-tech'>
        <TbBrandVite className="tech-icon" />
        Vite
        </a>
        {/* <a href='https://canva.com' className='about-tech'>
        <i className="devicon-canva-original"></i>
        Canva
        </a>
        <a href='https://adobe.com' className='about-tech'>
        <i className="devicon-illustrator-plain"></i>
        Illustrator
        </a> */}
      </span>
      <p className='about-text special'>
      As a frontend developer with backend skills, I specialize in the MERN stack, allowing me to seamlessly navigate both the client and server sides of web development.
      </p>
      <br />
      <h2 className='about-title'>
        <FontAwesomeIcon icon={faHeart} /> my hobbies{' '}
        <FontAwesomeIcon icon={faHeart} />
      </h2>
      <ul className='hobbies'>
        <li className='hobby-text'>rock climbing</li>
        <li className='hobby-text'>long distance backpacking</li>
        <li className='hobby-text'>painting/block printing</li>
        <li className='hobby-text'>photography</li>
        <li className='hobby-text'>music</li>
        <li className='hobby-text'>traveling</li>
        <li className='hobby-text'>van/trailer renovations</li>
      </ul>
    </div>
  );
}
