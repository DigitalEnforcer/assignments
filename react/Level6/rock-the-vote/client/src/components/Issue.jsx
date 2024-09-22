import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import IssueForm from "./IssueForm"
//import moment from 'moment'
import CommentContainer from './CommentContainer'


export default function Issue(props){

    const {title, description, imgUrl, _id, userId, username, upvotes, downvotes} = props
    const {deleteIssue, user, editIssue, handleUpvote, handleDownVote} = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)

    //console.log("userId: ", userId)
    //console.log("user._id", user._id)


    function handleToggle(){
        setIsEditing(!isEditing)
    }

    

    return(
        // <div className= "container">
        //     <h1>{username}</h1>
        //     <h1>{title}</h1>
        //     <h4>{description}</h4>
        //     <img src={imgUrl} style = {{height: "100px", width: "100px"}}/>
        //     <button onClick={() => handleUpvote(_id)}>{upvotes.length}Upvote</button>
        //     <p>{upvotes.length}</p>
        //     <button onClick ={() => handleDownVote(_id)}>DownVote</button>
        //     <p>{downvotes.length}</p>
        //     {userId === user._id && <div>
        //         <button onClick={handleToggle}>Edit</button>
        //         <button onClick = {()=>deleteIssue(_id)} >Delete</button>
        //     </div>}
        //     {
        //         isEditing &&
        //         <IssueForm handleToggle={handleToggle} {...props} submit={editIssue}/>
        //     }
        //     <CommentContainer issueId = {_id}/>
        // </div>

        <div className="container">
            <h1>{username}</h1>
            <h1>{title}</h1>
            <h4>{description}</h4>

            <img src={imgUrl} alt="Issue" className="issue-image" />

            <div className="vote-container">
                <button className="upvote-button" onClick={() => handleUpvote(_id)}>{upvotes.length} Upvote</button>
                <button className="downvote-button" onClick={() => handleDownVote(_id)}>{downvotes.length} DownVote</button>    
            </div>

            {userId === user._id && (
                <div className="edit-delete-buttons">
                    <button className="edit-button" onClick={handleToggle}>Edit</button>
                    <button className="delete-button" onClick={() => deleteIssue(_id)}>Delete</button>
                </div>
            )}

            {isEditing && <IssueForm handleToggle={handleToggle} {...props} submit={editIssue} />}

            <CommentContainer issueId={_id} />
        </div>

        
    )
}

// form