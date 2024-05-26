import React from "react";
//This will take in the information and replace the state with the information. Need that function that updates State as I type using the HandleChange function
export default function NavBar (){
    const [uglyItem, setUglyItem] = React.useState({
        description: "",
        title:"",
        imgUrl:""
    })

    function handleChange (event){
        const {name, value} = event.target 
        setUglyItem(prevUglyItem => {
            return {
                ...prevUglyItem,
                [name]: value
            }
        })
    }
    return (
        <>
        <form>
            <input 
                type="text" 
                placeholder="Image Link"
                onChange={handleChange}
                name="imgUrl"
                value={uglyItem.imgUrl}
                />

            <input
                type="text"
                placeholder="Title"
                onChange={handleChange}
                name="title"
                value={uglyItem.title}
                />

            <input 
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
                value={uglyItem.description}
                />
            <button>Submit</button>
            {uglyItem}
        </form>
        </>
    )

}