import React from 'react'
//being called to generate 5 random numbers and return them in "state"
//probably gonna need a .map to go through the props array being pushed in
export default function DiceBox (props){
    return (
        <div className="dice">
            {console.log(props.number)}
            <h1 className="diceNumbers">{props.number}</h1>
            <button onClick={props.handleClick}>Click to Roll</button>
        </div>
    )
}