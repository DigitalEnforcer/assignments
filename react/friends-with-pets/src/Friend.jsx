import React from 'react'
import Pet from './Pet'

export default function Friend(props){
    const petlist= props.pets.map(pet =>{
        return (
            <Pet {...pet}/>

        )
    })
    return (
        
        <div className="friendCard">
            <div className="nameAge">
                <h1>Name: {props.name}</h1>
                <h1>Age: {props.age}</h1>
            </div>
            <h2 className="petsBreeds">Pets:</h2>
            {petlist}
        </div>
        
    )
}