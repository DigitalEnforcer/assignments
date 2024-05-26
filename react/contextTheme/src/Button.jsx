import React from "react";
import {ThemeContext} from "./themeContext";

export default function Button(props){
    const context = React.useContext(ThemeContext)
    return (
        <div className="modeButton">
            <button onClick={context.toggleTheme}>{`Click for ${context.mode === "dark" ? "Light" : "Dark"} Mode`}</button>
        </div>
    )
}