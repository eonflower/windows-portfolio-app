import React from "react"
import Clock from "./Clock"
import StartMenu from "./StartMenu"

export default function Footer() {
    
    return (
        <div className="footer">
            <div className="footer-left">
            <StartMenu />
            <hr className="footer-hr" />
                <button className="footer-icon notes"></button>
                <button className="footer-icon msn"></button>
                <button className="footer-icon folder"></button>
            <hr className="footer-hr" />
            </div>
            
            <div className="footer-right">
                <p>
                © {new Date().getFullYear()}
                </p>
                <p className="footer-rights">
                all rights reserved
                </p>
                <div className="time">
                    <Clock />
                </div>
            </div>
        </div>
    )
}