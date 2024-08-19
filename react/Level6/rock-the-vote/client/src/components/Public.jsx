import React, {useEffect, useContext} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

function Public() {

    const {getAllUserIssues, allIssues} = useContext(UserContext)

    
    useEffect(()=> {
        getAllUserIssues()
    }, [])

console.log(getAllUserIssues)
    return ( 
        <>
            <IssueList issues={allIssues}/>
        </>
     );
}

export default Public;