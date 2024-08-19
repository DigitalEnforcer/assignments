import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import IssueForm from "./IssueForm"


export default function Issue(props){

    const {title, description, imgUrl, _id, userId} = props
    const {deleteIssue, user, editIssue} = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)

    function handleToggle(){
        setIsEditing(!isEditing)
    }

    return(
        <div>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl}/>
            {userId === user._id && <div>
                <button onClick={handleToggle}>Edit</button>
                <button onClick = {()=>deleteIssue(_id)} >Delete</button>
            </div>}
            {
                isEditing &&
                <IssueForm handleToggle={handleToggle} {...props} submit={editIssue}/>
            }
        </div>
    )
}

// form