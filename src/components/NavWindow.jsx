import React, {useState, useEffect} from "react"
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Draggable from "react-draggable"
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from "../pages/Contact"


export default function NavWindow() {
    const [title, setTitle] = useState("welcome.exe")
    const location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
         case "/":
           setTitle("welcome.exe");
           break;
         case "/about":
           setTitle("about-me.exe");
           break;
         case "/contact":
           setTitle("contact.exe");
           break;
           case "/projects":
            setTitle("my-projects.exe");
            break;
         default:
           setTitle("welcome.exe");
           break;
       }
     }, [location, setTitle]);
    return (
        <Draggable>
            <div className="pop-up-window">
            <div className="window-toolbar">
                <div className="window-title">{title}</div>
                <div className="toolbar-buttons">
                    <div className="toolbar-button min"></div>
                    <div className="toolbar-button max"></div>
                    <div className="toolbar-button close"></div>
                </div>
            </div>
            <div className="window-container">
                <div className="window-tabs">
                    <ul>
                    <li className="link-tab welcome"><a href="https://www.github.com/eonflower">Github</a></li>
                    <li className="link-tab welcome"><a href="https://www.linkedin.com/in/aloenelson/">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="window-content">
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            </Routes>
            </div>
            <div className="window-pages">
                <Link to="/projects" className="projects window-action">projects</Link>
                <Link to="/contact" className="projects window-action">contact</Link>
                <Link to="/about" className="about window-action">about</Link>
                <Link to="/" className="home window-action">home</Link>
            </div>
        </div>
        </Draggable>
    )
}