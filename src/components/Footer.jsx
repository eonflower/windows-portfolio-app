import React from "react"
import Clock from "./Clock"

export default function Footer() {
    
    return (
        <div className="footer">
            <div className="footer-left">
            <button className="start-button">start</button>
            <hr />
                <button className="footer-icon notes"></button>
                <button className="footer-icon msn"></button>
                <button className="footer-icon folder"></button>
            <hr />
            </div>
            
            <div className="footer-right">
                <p>
                © 2023 
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