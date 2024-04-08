import React from "react";

export default function Nav(){
    return(
        <nav className="nav-container">
            <div className="nav-contents">
                <div className="logo-container">
                    <img src="./src/assets/Troll Face.png" alt="meme troll face"/>
                    <span className="memeGenerator"><strong>Meme Generator</strong></span>
                </div>
                <span className="reactCourse">React Course - Project 3</span>
            </div>
            
        </nav>
    )
}