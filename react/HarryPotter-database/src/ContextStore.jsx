import React from "react";
import axios from "axios";

const ContextStore = React.createContext()

function ContextStoreProvider(props){
    const [hpCharacters, sethpCharacters] = React.useState([])
    const [hpSpells, sethpSpells] = React.useState({})

    function getItems(){
        axios.get("https://harry-potter-api-en.onrender.com/characters")
        .then(response => sethpCharacters(response.data))
        .catch(error => console.log(error))
    }

    function getSpells(){
        axios.get("https://harry-potter-api-en.onrender.com/spells")
        .then(response => sethpSpells(response.data))
        .catch(error => console.log(error))
    }
    React.useEffect(()=> {
        getItems()
        getSpells()

    }, [])
    
    return (
        <ContextStore.Provider value = {{
            
            hpCharacters,
            hpSpells

        }}>
            <div>{props.children}</div>
        </ContextStore.Provider>
    )
}

export {ContextStore, ContextStoreProvider}