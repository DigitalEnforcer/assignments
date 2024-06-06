import React from "react";
import axios from 'axios';
import { ContextStore } from "./ContextStore"
//This will take in the information and replace the state with the information. Need that function that updates State as I type using the HandleChange function
export default function NavBar (){
    const {uglyThings, setUglyThings, test, handleSubmit, uglyArray, setUglyArray, uglyItem, setUglyItem, getItems, handleChange} = React.useContext(ContextStore)
    
    return (
        <div className="navBar">
            <form className="navForm" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Image Link"
                    onChange={handleChange}
                    name="imgUrl"
                    value={uglyItem.imgUrl}
                    required
                    />

                <input
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                    value={uglyItem.title}
                    required
                    />

                <input 
                    type="text"
                    placeholder="Description"
                    onChange={handleChange}
                    name="description"
                    value={uglyItem.description}
                    required
                    />
                <button type="submit" className="sButton">Submit</button>

            </form>
        </div>
    )

}