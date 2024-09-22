import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

function Profile() {

    const {user, getUserIssues, issues, addIssue, getAllComments} = useContext(UserContext)

    useEffect(()=> {
        getUserIssues()
        getAllComments()
    }, [])
    
    return ( 
        <div>
            <div className="userContainer">
                <h1>Username: {user.username}</h1>
                <IssueForm submit = {addIssue}/>
            </div>

            <IssueList issues = {issues}/>
        </div>
     );
}

export default Profile;