import React, {useEffect, useContext} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

function Public() {

    const {getAllUserIssues, allIssues, getAllComments} = useContext(UserContext)

    useEffect(()=> {
        getAllUserIssues()
        getAllComments()
    }, [])

    return ( 
        <div>
            <IssueList issues={allIssues}/>
        </div>
     );
}

export default Public;