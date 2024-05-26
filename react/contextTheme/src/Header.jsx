import React from "react";
import {ThemeContext} from "./themeContext";

export default function Header(props){
    const context = React.useContext(ThemeContext)
    
    return (
        <div className={`headerLinks ${context.mode}-mode`}>
                <h1>Home</h1>
                <h1>Contact</h1>
                <h1>Support</h1>
        </div>
    )
}