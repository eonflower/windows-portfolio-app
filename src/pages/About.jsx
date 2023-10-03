import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines, faJs, faReact, faHtml5, faNodeJs, faGitAlt, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { TbBrandVite, TbBrandReactNative } from "react-icons/tb"
import { SiAxios, SiTailwindcss } from "react-icons/si"
import { BsFiletypeJson } from "react-icons/bs"

export default function About() {
  return (
    <div>
      <h2 className='about-title'>
        <FontAwesomeIcon icon={faWandMagicSparkles} flip='horizontal' /> a little about me <FontAwesomeIcon icon={faWandMagicSparkles} />
      </h2>
      <p className='about-text'>
        I like to make things
        <br />
        <br />
        I like to climb things
        <br />
        <br />
        I like to be outside
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
        <a target="_blank" href='https://reactnative.dev' className='about-tech'>
        <TbBrandReactNative className="tech-icon" />
        React Native
        </a>
        <a target="_blank" href='https://git-scm.com/' className='about-tech'>
        <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        Git
        </a>
        <a target="_blank" href='https://www.tailwindcss.com' className='about-tech'>
        <SiTailwindcss className="tech-icon" />
        Tailwindcss 
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
        <a href='https://canva.com' className='about-tech'>
        <i className="devicon-canva-original"></i>
        Canva
        </a>
        {/*
        <a href='https://adobe.com' className='about-tech'>
        <i className="devicon-illustrator-plain"></i>
        Illustrator
        </a> */}
      </span>

      <br/>

      <h2 className='about-title'>
        <FontAwesomeIcon icon={faPagelines} flip='horizontal' /> some background <FontAwesomeIcon icon={faPagelines} />
      </h2>

      <p className='about-text'>
          
      Certified full-stack developer, adept at crafting websites with intuitive, creative designs. Skilled in HTML5, CSS3, 
      JavaScript, Node, React, MongoDB, and API development. Proficient in both front-end and back-end tasks, with forays 
      into mobile development using React Native and Expo. 
      
      Combining a background in outdoor education, customer service, and peer support, I bring a distinctive perspective to tech. 
      Like nature, the tech landscape evolves, and I'm driven by a passion for creating innovative, empowering experiences. With 
      a talent for problem-solving and an artist's eye, I excel at crafting engaging products. I'm committed to universal 
      accessibility and believe empathy drives meaningful progress. 
      </p>
      <p className='about-text'>
      Let's connect and explore how my unique approach can elevate your project!
      </p>
      
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
