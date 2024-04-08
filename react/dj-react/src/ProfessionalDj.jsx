import React from "react";

export default function professionalDj (props){
    return (
        <div>
            <button onClick={props.handleClick}>Left Blue</button>
            <button onClick={props.anotherClick}>Right Blue</button>
        </div>
    )
}