import React from "react";

export default function bigTimeDj (props){
    return (
        <div>
            <button onClick={props.oneClick}>Big Dj One</button>
            <button onClick={props.twoClick}>Big DJ Two</button>
            <button onClick={props.threeClick}>Big DJ Three</button>
            <button onClick={props.fourClick}>Big DJ four</button>
      </div>
    )
}