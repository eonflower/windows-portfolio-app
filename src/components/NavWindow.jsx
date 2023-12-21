import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Draggable from "react-draggable";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { UserContext } from "../context/UserProvider";

export default function NavWindow() {
    const { toggle, minimize, maximize } = useContext(UserContext);
    const [title, setTitle] = useState("welcome.html");
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
        case "/":
            setTitle("welcome.html");
            break;
        case "/about":
            setTitle("about-me.html");
            break;
        case "/contact":
            setTitle("contact-me.html");
            break;
        case "/projects":
            setTitle("my-projects.html");
            break;
        default:
            setTitle("welcome.html");
            break;
        }
    }, [location, setTitle]);

    return (
        // <Draggable>
        <div className={`pop-up-window ${toggle ? "minimize" : ""}`}>
        <div className="window-toolbar">
            <div className="window-title">{title}</div>
            <div className="toolbar-buttons">
            <div className="toolbar-button close"></div>
            <button className={`toolbar-button max`}></button>
            <button className={`toolbar-button min`}></button>
            {/* <button className={`toolbar-button max`} onClick={() => maximize()}></button>
                    <button className={`toolbar-button min`} onClick={() => minimize()}></button> */}
            </div>
        </div>
        <div className={`window-container ${toggle ? "minimize" : ""}`}>
            <div className={`window-tabs ${toggle ? "minimize" : ""}`}>
            <ul>
                <li className="link-tab welcome">
                <a target="_blank" href="https://www.github.com/eonflower">
                    Github
                </a>
                </li>
                <li className="link-tab welcome">
                <a target="_blank" href="https://www.linkedin.com/in/aloenelson/">
                    LinkedIn
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div className={`window-content ${toggle ? "minimize" : ""}`}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        <div className="window-pages">
            <Link to="/" className="home window-action">
            home
            </Link>
            <Link to="/about" className="about window-action">
            about
            </Link>
            <Link to="/projects" className="projects window-action">
            projects
            </Link>
            <Link to="/contact" className="projects window-action">
            contact
            </Link>
        </div>
        </div>
        // </Draggable>
    );
}
