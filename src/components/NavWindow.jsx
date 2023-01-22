import React from "react"
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'


export default function NavWindow() {
    return (
        <div className="pop-up-window">
            <div className="window-toolbar">
                <div className="window-title">My Portfolio</div>
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
            </Routes>
            </div>
            <div className="window-pages">
                <a href="/projects" className="projects window-action">projects</a>
                <a href="/about" className="about window-action">about</a>
                <a href="/" className="home window-action">home</a>
            </div>
        </div>
    )
}