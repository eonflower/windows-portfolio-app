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
      <p>
        I'm a digital wizard ~
      </p>
      <p>
        Whether conjuring websites, apps, or art, I do so with a touch of magic! 
      </p>
      <p>
        Cooding or crafting, I thrive on solving puzzles and unleashing my imagination to tackle any challenge that comes my way. 
        My keen eye for detail brings forth stunning, vibrant creations that are not only visually captivating but are also fun and 
        accessible to use.
      </p>

      
      
      {/* I'm a problem-solving, adventure-seeking web developer with an eye for detail and a passion for 
      optimizing user experiences. Combining my love for art with technical skills, I strive to create 
      websites that are both beautiful and accessible for people of all backgrounds. I believe in 
      challenging the status quo and creating inclusive spaces both online and in the outdoors. */}

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
        <a target="_blank" href='https://reactnative.dev' className='about-tech'>
        <TbBrandReactNative className="tech-icon" />
        React Native
        </a>
        <a target="_blank" href='https://www.npmjs.com/package/axios' className='about-tech'>
        <SiAxios className="tech-icon" />
        Axios 
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

      <br/>

      <h2 className='about-title'>
        <FontAwesomeIcon icon={faPagelines} flip='horizontal' /> some background <FontAwesomeIcon icon={faPagelines} />
      </h2>

      <p className='about-text'>
          
      I am a certified fullstack developer with a proven ability to build functional, well-structured websites that offer 
      a creative and user-friendly design. My expertise was honed through the successful completion of V School's 
      mastery-based 1,000+ hour Web Development bootcamp, where I focused on mastering HTML5, CSS3, JavaScript, Node, 
      React, MongoDB, and API development. With a strong foundation in these technologies, I am equipped to handle both 
      front-end and back-end development tasks proficiently. Additionally, I have dabbled in mobile development using React Native and Expo.
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
