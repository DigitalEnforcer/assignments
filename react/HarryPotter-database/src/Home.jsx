import React from "react";
import {ContextStore} from "./ContextStore"
import { Routes, Route, Link } from 'react-router-dom'

export default function Home (){
    const {getItems} = React.useContext(ContextStore)

    return (
        <div className="mainBody">
            <div className="title">
                <h1>Welcome to Hogwarts Archive</h1>
            </div>
            <div className="frontDoor">
                <div className="leftDoor">
                    <img src="./src/assets/leftDoor.png" alt="leftDoor" />
                </div>
                <div className="dumbledore">
                    <img src="./src/assets/dumbledoreDoor.png" alt="dumbledore"  />
                </div>
                <div className="rightDoor">
                    <Link to="/characters">
                        <img src="./src/assets/rightDoor.png" atl="rightDoor" />
                    </Link>
                </div>
                
                
            </div>
            
        </div>
        
    )
}