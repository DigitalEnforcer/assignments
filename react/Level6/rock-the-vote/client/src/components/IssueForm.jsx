import { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function IssueForm(props){

    const {addIssue} = useContext(UserContext) // already coming in through props "submit"
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
        <form className = "commentWindow" onSubmit={handleSubmit}>
            <input 
                name="title"
                value={formData.title}
                placeholder="title"
                onChange={handleChange}
            />
            <input
                name="description"
                value={formData.description}
                placeholder="description"
                onChange={handleChange}
            />
            <input
                name="imgUrl"
                value={formData.imgUrl}
                placeholder="Image link"
                onChange={handleChange}
            />

            <button className="submitButton">Submit</button>
        </form>
    )
}