import {useContext} from 'react'
import { UserContext } from '../context/UserProvider'


export default function CommentList(props){

    const {issueId} = props
    const {allComments} = useContext(UserContext)
    const filteredComments = allComments.filter(comment => comment.issue === issueId)
    const commentElements = filteredComments.map(comment => {
        return (
            <div key={comment._id} className="commentTemplate">
                <p className="commentUser">{comment.username}</p>
                <p className="usersComment">{comment.text}</p>
            </div>
        )
    })

    console.log(filteredComments)
    return (
        <div>
            {commentElements}
        </div>
    )
}