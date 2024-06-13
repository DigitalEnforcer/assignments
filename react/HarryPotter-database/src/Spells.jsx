import React from "react";
import { ContextStore } from "./ContextStore"
import { Routes, Route, Link } from 'react-router-dom'
import axios from "axios";

export default function Spells (){
   const {hpSpells} = React.useContext(ContextStore)
    const allSpells = hpSpells.map((spell) => (
                    <div key={spell.id} className="spellItem">
                        <p className="spellName">{spell.spell}</p>
                        <p className="spellEffect">Effects: {spell.use}</p>
                    </div>
                    ))

   console.log(hpSpells)
    return (
        <>
        <div className="everything">
            <div className ="bookOfSpells">        <span className="wave-spell1">B</span>
                                                   <span className="wave-spell2">o</span>
                                                   <span className="wave-spell3">o</span>
                                                   <span className="wave-spell4">k</span>
                                                   <span> </span>
                                                   <span className="wave-spell2">o</span>
                                                   <span className="wave-spell3">f</span>
                                                   <span> </span>
                                                   <span className="wave-spell1">S</span>
                                                   <span className="wave-spell2">p</span>
                                                   <span className="wave-spell3">e</span>
                                                   <span className="wave-spell4">l</span>
                                                   <span className="wave-spell1">l</span>
                                                   <span className="wave-spell2">s</span>
                                                   
            </div>
            <div className="allSpells">
                {allSpells}
            </div>
        </div>
        </>
    )
}