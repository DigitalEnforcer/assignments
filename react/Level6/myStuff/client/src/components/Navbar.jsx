import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom"
import { UserContext } from '../context/UserProvider';

function Navbar(props) {
    const {token} = useContext(UserContext)
    const {logout} = props
    return ( 
        <nav>
            { token ?
                <>
                    <Link to = "/GoalPage"><button>Goals</button></Link>
                    <Link to = "/public"><button>Everyone's Goals</button></Link>
                    <Link to = "/JournalPage"><button>Journal</button></Link>
                    <Link to = "/ReminderPage"><button>Reminders</button></Link>
                    <Link to = "/WebsitePage"><button>Fav Websites</button></Link>
                    <Link to = "/"><button onClick = {logout}>Logout</button></Link>
                </>
                : 
                <>
                    <div></div>
                </>
            }
        </nav>
     );
}

export default Navbar;