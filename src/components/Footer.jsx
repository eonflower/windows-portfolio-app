import React from "react"
import Clock from "./Clock"

export default function Footer() {
    
    return (
        <div className="footer">
            <button className="start-button">start</button>
            <hr />
            <div className="footer-left">
                <button className="footer-icon notes"></button>
                <button className="footer-icon msn"></button>
                <button className="footer-icon folder"></button>
            </div>
            <hr />
            <div className="footer-right">
                <p>
                © 2023 all rights reserved
                </p>
                <div className="time">
                    <Clock />
                </div>
            </div>
        </div>
    )
}