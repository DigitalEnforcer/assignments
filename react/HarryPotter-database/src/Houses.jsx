import React from "react";
import {ContextStore} from "./ContextStore"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import gryffindorImage from './assets/Gryffindor_ClearBG.webp';
import hufflepuffImage from './assets/Hufflepuff_ClearBG.webp';
import ravenclawImage from './assets/RavenclawCrest.webp';
import slytherinImage from './assets/Slytherin_ClearBG.webp';

export default function Houses(){
    return (
        <div className="houseImages">
            <div className="houseCrest">
                <img src={gryffindorImage} alt="gryffindorImage"/>
            </div>
            <h2 className="houseNameGryffindor">Gryffindor</h2>

            <div className="houseCrest">
                <img src={hufflepuffImage} alt="hufflepuffImage"/>
            </div>
            <h2 className="houseNameHufflepuff">Hufflepuff</h2>

            <div className="houseCrest"> 
                <img src={ravenclawImage} alt="ravenclawImage"/>
            </div>
            <h2 className="houseNameRavenclaw">Ravenclaw</h2>

            <div className="houseCrest">
                <img src={slytherinImage} alt="slytherinImage"/>
            </div>
            <h2 className="houseNameSlytherin">Slytherin</h2>
            
        </div>
        
    )
}