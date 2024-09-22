import {useContext, useState } from 'react'
import UserProvider, { UserContext } from '../context/UserProvider'


export default function CommentForm(props){

    const {addComment} = useContext(UserContext)
    const {issueId} = props

    const [formData, setFormData] = useState({
        text: ''
    })

    function handleChange(e){
        const {name, value} = e.target 
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        addComment(issueId, formData)
        setFormData({text: ''})
    }


    return (
        <form className="commentWindow" onSubmit={handleSubmit}>
            <textarea
                placeholder="Comment"
                name="text"
                value={formData.text}
                onChange={handleChange}
            />
            <button className="commentSubmit">Leave Comment</button>
        </form>
    )
}