import React from "react";
import axios from 'axios';

export default function randomColor (){
    const [backColor, setColor] = React.useState({})
    
    React.useEffect (()=>{
        axios.get("https://random-color.onrender.com/colors/random")
            .then(data => setColor(data.data.hex))
            .catch(error => console.log(error))
    }, [])
    return (
        <div style={{backgroundColor:backColor, height: 200, width: 200}}>
            {console.log(backColor)}
        </div>
    )
    }
