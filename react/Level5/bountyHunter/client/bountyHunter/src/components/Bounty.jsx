import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounty(props){
    const { firstName, lastName, living, bounty_Amount, type, _id} = props
    const [ editToggle, setEditToggle] = useState(false)
    // console.log(living)
    return (
        <div className="bounty">
            { !editToggle ?

            <>
                <h1>Name: {firstName} {lastName}</h1>
                <h2>Jedi or Sith: {type}</h2>
                <h1>Bounty: {bounty_Amount}</h1>
                <h3>Dead or Alive: {living ? "Alive" : "Dead"}</h3>

                <button className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>Delete
                </button>

                <button className ="edit-btn"
                    onClick ={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>

            </>
        :
            <>
                <AddBountyForm
                    firstName={firstName}
                    lastName={lastName}
                    living={living}
                    bounty_Amount={bounty_Amount}
                    type={type}
                    submit={props.editBounty}//
                    _id={_id}
                />
                <button className="close-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                    </button>
            </>
            }
            
        </div>
    )
}   