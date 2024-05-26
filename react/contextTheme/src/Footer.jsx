import React from "react";
import {ThemeContext} from "./themeContext";

export default function Footer(props){
    const context = React.useContext(ThemeContext)
    return (
        <div>
            <div className={`footerInfo ${context.mode}-mode`}>
                <h3>We are a self serving community of believers. Visit us when we go LIVE. Copyright 2024</h3>
            </div>
        </div>
    )
}