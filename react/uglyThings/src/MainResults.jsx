import React from "react"
import { ContextStore } from "./ContextStore"

import Edit from "./Edit.jsx"
//This Component will display all of the Imgs/Title/Description using a .map from the uglythings.api => <li>
//How to display the API
export default function MainResults() {
    
    const {uglyArray, deleteItems} = React.useContext(ContextStore)
    const [shownItems, setShownItems] = React.useState({})
    

    function toggleShown (id){
        setShownItems(prevShownItems => ({
            ...prevShownItems,
            [id]: !prevShownItems[id]
        }));
        
    }

    const allUglyThings = uglyArray.map((item) => 
                (
                    <div key={item._id} className="uglyItem">
                        <div className="uglyInside">
                            <img src={item.imgUrl} alt={item.title} style={{width: '200px', height: 'auto'}}/>
                            <p><strong>Title: </strong> {item.title}</p>
                            <p><strong>Descripton: </strong> {item.description}</p>
                            <div className="editButtons">
                                <button onClick={() => deleteItems(item._id)}>Delete</button>
                                <button onClick={() => toggleShown(item._id)}>{shownItems[item._id] ? "Cancel" : "Edit"}</button>
                            </div>
                            {shownItems[item._id] && <Edit item={item}/>}
                        </div>
                    </div>
                ))
    return (
        <>
            <div className="mainContent">
                <h3 className="title">Ugly Things</h3>
                {allUglyThings.reverse()}
            </div>
            
        </>
    )
}