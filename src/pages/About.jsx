import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPagelines,
  faJs,
  faReact,
  faHtml5,
  faNodeJs,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { TbBrandVite, TbBrandReactNative } from "react-icons/tb";
import { SiAxios, SiTailwindcss } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

export default function About() {
  return (
    <div className="about">
      <h2>
        <FontAwesomeIcon icon={faWandMagicSparkles} flip="horizontal" /> a
        little about me <FontAwesomeIcon icon={faWandMagicSparkles} />
      </h2>
      <p>
        I like to make cool things
        <br />
        <br />
        I like to climb tall rocks
        <br />
        <br />I like to be outside
      </p>

      <h2>
        <FontAwesomeIcon icon={faPagelines} flip="horizontal" /> some background{" "}
        <FontAwesomeIcon icon={faPagelines} />
      </h2>

      <p>
        As a full-stack developer, I build intuitive, creative websites and apps
        utilizing the technologies listed below. My expertise encompasses both
        front-end design and back-end development, including mobile experience
        with React Native and Expo. What distinguishes me is my diverse
        background in outdoor education, customer service, and peer support.
        These roles instilled collaboration, adaptability and user-centric
        thinking—skills that seamlessly apply to web development. I approach
        each project through the lens of user experience to craft thoughtful,
        functional solutions.
      </p>
      <p>
        Like the ever-changing wilderness, technology continuously evolves,
        driven by innovation. I'm passionate about creating digital experiences
        that inspire and empower users. My love of problem-solving, combined
        with an artistic eye for detail, allows me to overcome complex
        challenges and build engaging products. I'm committed to universal
        accessibility, ensuring that every website and app is user-friendly. In
        my view, empathy drives meaningful progress. I aim not just to develop
        digital solutions, but to create inclusive, innovative platforms that
        resonate with diverse users.
      </p>
      <p>
        Let's connect and explore how my unique approach can elevate your
        project!
      </p>

      <h2>
        <FontAwesomeIcon icon={faCode} /> technologies I work with lately{" "}
        <FontAwesomeIcon icon={faCode} />
      </h2>
      <span className="tech">
        <a target="_blank" href="https://www.w3schools.com/js/">
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          JavaScript
        </a>
        <a target="_blank" href="https://www.npmjs.com/package/react">
          <FontAwesomeIcon className="tech-icon" icon={faReact} />
          Reactjs
        </a>
        <a target="_blank" href="https://www.w3schools.com/html/">
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          HTML
        </a>
        <a target="_blank" href="https://www.w3schools.com/css/">
          <i className="devicon-css3-plain tech-icon"></i>
          CSS3
        </a>
        <a target="_blank" href="https://nodejs.org">
          <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
          Nodejs
        </a>
        <a target="_blank" href="https://reactnative.dev">
          <TbBrandReactNative className="tech-icon" />
          React Native
        </a>
        <a target="_blank" href="https://git-scm.com/">
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
          Git
        </a>
        <a target="_blank" href="https://www.tailwindcss.com">
          <SiTailwindcss className="tech-icon" />
          Tailwindcss
        </a>
        <a target="_blank" href="https://www.npmjs.com/package/react-bootstrap">
          <FontAwesomeIcon className="tech-icon" icon={faBootstrap} />
          Bootstrap
        </a>
        <a target="_blank" href="https://www.mongodb.com/try">
          <i className="devicon-mongodb-plain tech-icon"></i>
          MongoDB
        </a>
        <a target="_blank" href="https://www.npmjs.com/package/express">
          <i className="devicon-express-original tech-icon"></i>
          Express
        </a>
        <a href="https://canva.com">
          <i className="devicon-canva-original"></i>
          Canva
        </a>
        {/*
        <a href='https://adobe.com' className='about-tech'>
        <i className="devicon-illustrator-plain"></i>
        Illustrator
        </a> */}
      </span>

      <br />

      <h2>
        <FontAwesomeIcon icon={faHeart} /> my hobbies{" "}
        <FontAwesomeIcon icon={faHeart} />
      </h2>
      <ul className="hobbies">
        <li>rock climbing</li>
        <li>long distance backpacking</li>
        <li>painting/block printing</li>
        <li>photography</li>
        <li>music</li>
        <li>traveling</li>
        <li>van/trailer renovations</li>
      </ul>
    </div>
  );
}
