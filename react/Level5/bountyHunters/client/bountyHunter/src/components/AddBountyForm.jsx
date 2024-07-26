import React, {useState} from "react";

export default function AddBountyForm(props){
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || false,
        bounty_Amount: props.bounty_Amount || 0,
        type: props.type || "",
    }
    console.log(props.living)
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value, type, checked} = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: type === "checkbox" ? checked: value}))
    }

    function handleSubmit (e){
        e.preventDefault()
        props.submit(inputs, props._id)
        !props.isEditing && setInputs(initInputs)
        props.handleToggle && props.handleToggle()
    }
console.log(inputs)
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name" 
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name" 
            />
            <label>
                Still Living?
                <input
                    type="checkbox"
                    name="living"
                    checked={inputs.living}
                    onChange={handleChange}
                     
                />
            </label>
            <label>
                Bounty Amount:
                <input
                    className="bounty_Amount_Label"
                    type="Number"
                    name="bounty_Amount"
                    value={inputs.bounty_Amount}
                    onChange={handleChange}
                    placeholder="Amount of Bounty" 
                />
            </label>
            <label>
                Sith
                <input
                    type="radio"
                    name="type"
                    value="Sith"
                    checked={inputs.type === "Sith"}
                    onChange={handleChange}
                    
                />
            </label>
            <label>
                Jedi
                <input
                        type="radio"
                        name="type"
                        value ="Jedi"
                        checked={inputs.type === "Jedi"}
                        onChange={handleChange}
                    />
            </label>
            <button>Submit</button>
        </form>
    )



}