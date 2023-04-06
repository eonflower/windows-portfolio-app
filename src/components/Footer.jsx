import React from "react"
import Clock from "./Clock"

export default function Footer() {
    

    setInterval(() => {

    })
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
            <button className="credit">created and designed by aloe</button>
            <div className="footer-right">
                <div className="time">
                    <Clock />
                </div>
            </div>
        </div>
    )
}