import { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function IssueForm(props){

    const {addIssue} = useContext(UserContext)
    const {title, description, imgUrl, _id, submit, handleToggle} = props


    const initState = {
        title: title || "",
        description: description || "",
        imgUrl: imgUrl || ""
    }

    const [formData, setFormData] = useState(initState)

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit (e){
        e.preventDefault()
        submit(formData, _id)
        !handleToggle && setFormData(initState)
        handleToggle && handleToggle()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <input
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    )
}