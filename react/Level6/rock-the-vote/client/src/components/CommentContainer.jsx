import { useState, useContext } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { UserContext } from '../context/UserProvider'

export default function CommentContainer(props) {

    const {issueId} = props
    

    const[isHidden, setIsHidden] = useState(true)

    function toggleView(){
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <CommentForm issueId = {issueId}/>
            <button className = "commentButton" onClick={toggleView}>{isHidden ? `Show Comments` : `Hide Comments`}</button>
            {!isHidden && <CommentList issueId = {issueId}/>}
        </div>
    )
}

