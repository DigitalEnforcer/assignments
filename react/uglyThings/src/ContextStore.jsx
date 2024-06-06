import React from "react";
import axios from 'axios'

const ContextStore = React.createContext()

function ContextStoreProvider(props){
    
    
    const [uglyArray, setUglyArray] = React.useState([])
    const [uglyItem, setUglyItem] = React.useState({
        description: "",
        title:"",
        imgUrl:""
    })

    function handleChange (event){
        const {name, value} = event.target;
        setUglyItem(prevUglyItem => ({
                ...prevUglyItem,
                [name]: value
            
        }))
    }

    function post(newItem) {
        axios.post("https://api.vschool.io/davidfrohlich/thing", newItem)
        .then(()=>{getItems()})
        .catch(error => console.log(error))
        }

    function handleSubmit(event) {
            event.preventDefault();
            post(uglyItem)
            setUglyItem({ description: "", title: "", imgUrl:""})
        }

    function editItems (update){
        console.log(update)
        axios.put(`https://api.vschool.io/davidfrohlich/thing/${update._id}`, update)
            .then(response => {console.log(response.data)
            getItems()})
            .catch(error => console.log(error))
    }

    function getItems(){
        axios.get("https://api.vschool.io/davidfrohlich/thing")
        .then(response => setUglyArray(response.data))
        .catch(error => console.log(error))
    }

    function deleteItems(deletedId){
        axios.delete(`https://api.vschool.io/davidfrohlich/thing/${deletedId}`)
            .then(response => {console.log(response.data);
            getItems()})
            .catch(error => console.log(error))
    }

    React.useEffect(()=> {
        getItems()
    },[])
    
        return (
            <ContextStore.Provider value= {{
                post,
                handleSubmit,
                handleChange,
                getItems,
                deleteItems,
                editItems,
                uglyArray,
                setUglyArray,
                uglyItem,
                setUglyItem
            }}>
                <div>{props.children}</div>
            </ContextStore.Provider>
        )
    }

export {ContextStore, ContextStoreProvider}