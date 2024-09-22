import React, {useState} from "react"
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){

    

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allIssues, setAllIssues] = useState([])
    const [allComments, setAllComments] = useState([])

    async function signup(creds){
        try {
            const res = await axios.post('/api/auth/signup', creds)
            const {user, token} = res.data 
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            //console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
        }
    }

    async function login(creds){
        try {
            const res = await axios.post('/api/auth/login', creds)
            const {user, token} = res.data 
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            //console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
        }
    }

    async function logout(){
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            resetAuthErr()
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    token: "",
                    user: {}
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    function handleAuthErr(errMsg){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg
            }
        })
    }

    function resetAuthErr(){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg:""
            }
        })
    }

    async function getUserIssues(){
        try {
            const res = await userAxios.get('/api/main/issues/user')
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: res.data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    
//get all user without /user
    async function getAllUserIssues(){
        try {
            const res = await userAxios.get('/api/main/issues/')
            setAllIssues(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    async function addIssue(newIssue){
        try {
            const res = await userAxios.post('/api/main/issues', newIssue)
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteIssue(issueId){
        try {
            const res = await userAxios.delete(`/api/main/issues/${issueId}`)
            setAllIssues(prevIssues => prevIssues.filter(issue => issue._id !== issueId))
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: prevState.issues.filter(issue => issue._id !== issueId)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    async function editIssue(update, issueId){
        try {
            const res = await userAxios.put(`/api/main/issues/${issueId}`, update)
            setAllIssues(prevIssues => prevIssues.map(issue => issue._id !== issueId ? issue : res.data))
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: prevState.issues.map(issue => issue._id !== issueId ? issue : res.data)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleUpvote(issueId){
        try {
            const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`) //don't need to send anything back
            console.log(res.data)
            setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDownVote(issueId){
        try {
            const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`)
            setAllIssues(prevIssues => {
                return prevIssues.map(issue => issue._id === issueId ? res.data : issue)
            })
            setUserState(prevUserState => ({
                ...prevUserState,
                issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
            }))
        } catch (error) {
            console.log(error)
        }
    }

    function getAllComments(){
        userAxios.get('/api/main/comments')
        .then(res => setAllComments(res.data))
        .catch(err => console.log(err))
    }

    function addComment(id, comment){
        userAxios.post(`/api/main/comments/${id}`, comment)
            .then(res => setAllComments(prevAllComments =>{
                return [
                    ...prevAllComments,
                    res.data
                ]
            }))
            .catch(err => console.log(err))
    }

    //create a function for all issues
    //console.log(userState.user)
    return (
        <UserContext.Provider value ={{
            ...userState, 
            signup, 
            login, 
            logout, 
            getUserIssues,
            getAllUserIssues,
            addIssue,
            deleteIssue,
            editIssue,
            handleAuthErr,
            resetAuthErr,
            handleUpvote,
            handleDownVote,
            getAllComments,
            addComment,
            allComments,
            allIssues}}>
            {props.children}
        </UserContext.Provider>
    )
}