import React from "react";

export default function badgeInfoForm (props){
  const initialInputs= {
    firstName: "",
    lastName:"",
    email: "",
    placeOfBirth: "",
    phoneNumber: "",
    favoriteFood: "",
    comments: ""
}
  const [formData, setFormData] = React.useState(initialInputs)

  function handleChange(event) {
    const {name, value} = event.target
    
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
          
        }
    })
  }
  const isButtonDisabled = Object.values(formData).some((value) => value==="")
  

  function createBadges(event){
    event.preventDefault()
    props.setBadges(prevBadges =>{
      return [...prevBadges, formData]
      })
    setFormData(initialInputs)
  }
  
    return (
      <div className="full-form">
        <div>
          <form onSubmit={createBadges} className="form-content">
            <div className="badge-info">
                <div className ="firstSet">
                  <span>First Name:</span>
                  <input 
                      className="input-field"
                      type="text"
                      minLength={3}
                      required
                      placeholder="First Name"
                      onChange={handleChange}
                      name="firstName"
                      value={formData.firstName}
                    />
                    <span>Last Name:</span>
                  <input  
                      className="input-field"
                      type="text"
                      minLength={3}
                      required
                      placeholder="Last Name"
                      onChange={handleChange}
                      name="lastName"
                      value={formData.lastName}
                    />
                    <span>Email:</span>
                  <input  
                      className="input-field"
                      type="email"
                      minLength={3}
                      required
                      placeholder="Email"
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                    />
                </div>
                <div className="secondSet">
                  <span>Place of Birth:</span>
                  <input  
                      className="input-field"
                      type="text"
                      minLength={3}
                      required
                      placeholder="Place Of Birth"
                      onChange={handleChange}
                      name="placeOfBirth"
                      value={formData.placeOfBirth}
                    />
                  <span>Phone Number:</span>
                  <input  
                      className="input-field"
                      type="number"
                      minLength={3}
                      required
                      placeholder="Phone Number"
                      onChange={handleChange}
                      name="phoneNumber"
                      value={formData.phoneNumber}
                    />
                  <span>Favorite Food:</span>
                  <input  
                      className="input-field"
                      type="text"
                      minLength={3}
                      required
                      placeholder="Favorite Food"
                      onChange={handleChange}
                      name="favoriteFood"
                      value={formData.favoriteFood}
                    />
                </div>
              </div>
              <div className="badge-end">
                <div className="commentsSection">
                  <p>Tell us about yourself:</p>
                  <textarea
                      className="input-comment-field"
                      type="text"
                      minLength={3}
                      required
                      placeholder="Tell us about yourself"
                      onChange={handleChange}
                      name="comments"
                      value={formData.comments}
                    />
                </div>
              </div>
            <button type="submit" disabled={isButtonDisabled}>Submit</button>
          </form>
        </div>
      </div>
    )
}