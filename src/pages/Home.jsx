import React from "react";
import goblin from "../img/goblin.jpg"

export default function Home() {
    return (
    <div className="home-wrapper">
       <img className="pfp" src={goblin} alt="photo of me" />
       <span className="home-welcome">
        <h2>hey there, i'm aloe</h2>
        <h3>(they/them)</h3>
        <h4>web developer • artist • climber • backpacker</h4>
        <h4>welcome to my page!</h4>
      
       </span>
    </div>
    )
}