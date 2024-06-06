// import React from "react";
// import { ContextStore } from "./ContextStore";

// export default function Edit(props){
//     const {uglyThings, setUglyThings, test, uglyArray, setUglyArray, uglyItem, setUglyItem, getItems, handleChange, editItems, newItem, setNewItem} = React.useContext(ContextStore)
// //use handleSubmit in here so ti's not connected to the ContextStore version
//     console.log(props.item)

//     function handleChange (event){
//         const {name, value} = event.target;
//         setNewItem(prevNewItem => ({
//                 ...prevNewItem,
//                 [name]: value
            
//         }))
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         editItems(newItem);
//     }
//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             Image Url: 
//             <input 
//                 type="text" 
//                 placeholder="Image Link"
//                 onChange={handleChange}
//                 name="imgUrl"
//                 value={props.item.imgUrl}
//                 required
//                 />
//             Title: 
//             <input
//                 type="text"
//                 placeholder="Title"
//                 onChange={handleChange}
//                 name="title"
//                 value={props.item.title}
//                 required
//                 />
//             Description: 
//             <input 
//                 type="text"
//                 placeholder="Description"
//                 onChange={handleChange}
//                 name="description"
//                 value={props.item.description}
//                 required
//                 />
//             <button type="submit">Submit</button>

//         </form>
//         </>
//     )
// }

import React, { useState, useEffect, useContext } from "react";
import { ContextStore } from "./ContextStore";

export default function Edit(props) {
    const { editItems } = useContext(ContextStore);

    // Initialize the state with props.item values
    const [newItem, setNewItem] = useState({
        _id: props.item._id || "",
        imgUrl: props.item.imgUrl || "",
        title: props.item.title || "",
        description: props.item.description || ""
    });

    // Update the state when props.item changes
    useEffect(() => {
        setNewItem(prevItem =>({...prevItem,
            imgUrl: props.item.imgUrl || "",
            title: props.item.title || "",
            description: props.item.description || ""
        }));
    }, [props.item]);

    // Handle input changes
    function handleChange(event) {
        const { name, value } = event.target;
        setNewItem(prevNewItem => ({
            ...prevNewItem,
            [name]: value
        }));
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        editItems(newItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Image Url:
                <input 
                    type="text" 
                    placeholder="Image Link"
                    onChange={handleChange}
                    name="imgUrl"
                    value={newItem.imgUrl}
                    required
                />
            </label>
            <label>
                Title:
                <input
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                    value={newItem.title}
                    required
                />
            </label>
            <label>
                Description:
                <input 
                    type="text"
                    placeholder="Description"
                    onChange={handleChange}
                    name="description"
                    value={newItem.description}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}