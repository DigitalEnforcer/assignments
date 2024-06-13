import React from "react";
import {ContextStore} from "./ContextStore"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import gryffindorImage from './assets/Gryffindor_ClearBG.webp';
import hufflepuffImage from './assets/Hufflepuff_ClearBG.webp';
import ravenclawImage from './assets/RavenclawCrest.webp';
import slytherinImage from './assets/Slytherin_ClearBG.webp';

// import {Characters } from './Characters'

export default function CharacterInfo () {
    const {id} = useParams()
    const {hpCharacters} = React.useContext(ContextStore)
    const foundCharacter = hpCharacters.find(item => item.id == id)
    console.log(foundCharacter)
    
    const getBackgroundImage = (house) => {
        switch (house) {
            case "Gryffindor":
                return gryffindorImage;
            case "Hufflepuff":
                return hufflepuffImage;
            case "Ravenclaw":
                return ravenclawImage;
            case "Slytherin":
                return slytherinImage;
            default:
                return gryffindorImage;
        }
    }

    
    const backgroundHouseImage = getBackgroundImage(foundCharacter.hogwartsHouse);
    console.log(backgroundHouseImage)
    const style = {
        backgroundImage: `url(${backgroundHouseImage})`,
        backgroundSize: 'cover',
        backgroundposition: 'center',
    }

    return (
        <div className="characterDescriptionCard">
            {/* <button disabled = {id ==="1"}>Previous</button> */}
            <div className="HarryPotterCharacterTemplate">
                        <h3 className="characterName">{foundCharacter.character}</h3>
                        <img className= "characterImage" src={foundCharacter.image} alt={foundCharacter.image} style ={{width:'200px', height:'250px'}}/>
            </div>
            <div className="characterDescription"  style={style}>
                <h2>Nickname: {foundCharacter.nickname}</h2>
                <h2>Member of House: {foundCharacter.hogwartsHouse}</h2>
                <h3>{foundCharacter.character} was played by {foundCharacter.interpretedBy} in the movies based on the books by J.K. Rowling</h3>
            </div>
            
            {/* <button>Next</button> */}
        </div>
    )
}