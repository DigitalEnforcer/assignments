import React from "react";
import {ContextStore} from "./ContextStore"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

export default function Characters (){
    const navigate = useNavigate()
    function handleClick (id){
        navigate(`/characters/${id}`)
    }
    const {hpCharacters} = React.useContext(ContextStore)
    const allCharacters = hpCharacters.map((character)=>
         (
                <div key={character.id} className="HarryPotterCharacterTemplate">
                    <h3 className="characterName">{character.character}</h3>
                    {console.log(character.id)}
                    <img onClick={()=> handleClick(character.id)} className= "characterImage" src={character.image} alt={character.image} style ={{width:'200px', height:'250px'}}/>
                </div>
            ))
    return (
        <div className="allCharacters">
            {allCharacters}
        </div>
    )
}