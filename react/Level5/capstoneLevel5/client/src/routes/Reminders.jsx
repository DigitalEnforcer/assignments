import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'
import {format} from 'date-fns'

export default function Reminders (){

    const [reminders, setReminders] = useState([])
    const [singleReminder, setSingleReminder] = useState({
        title:"",
        description:"",
        important: false
    })


    function getReminders (){
        axios.get("/api/reminders")
        .then(res => setReminders(res.data))
        .catch(err => console.log(err))
      }
    
      function deleteReminder (reminderId){
        axios.delete(`/api/reminders/${reminderId}`)
        .then (res => setReminders(prevReminders => prevReminders.filter(reminder => reminder._id !== reminderId)))
        .catch(err => console.log(err))
    }
    
    function addReminder (newReminder){
      axios.post (`/api/reminders`, newReminder)
      .then (res => {setReminders(prevReminders => [...prevReminders, res.data])})
      .catch (err => console.log(err))
    }

    function handleChange (event){
      const {name, value, type, checked} = event.target;
      setSingleReminder(prevSingleReminder => ({...prevSingleReminder, [name]: type === "checkbox" ? checked: value}))
    }

    function handleSubmit (e){
      e.preventDefault()
      addReminder(singleReminder)
      setSingleReminder({title:"", description:"", important:false})
    }

      useEffect(()=> {
        getReminders()
      }, [])


      const allReminders = reminders.map((reminder)=> {
        const formattedDate = format(new Date(reminder.createdAt), 'PPpp')

        return (
        <div key={reminder._id} className = "goal-item" style={{ background: reminder.important ? 'linear-gradient(to right, white, rgba(255, 85, 102, 0.637) )' : 'white'}}>
            <h2>{reminder.title}</h2>
            <p>{reminder.description}</p>
            <h6>Created: {formattedDate}</h6>
            <button className ="delete-btn" onClick = {() => deleteReminder(reminder._id)}>Delete</button>
        </div>
        )
})
    return (
      <div className= "form-container">
        <form onSubmit ={handleSubmit}>
          <input 
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={singleReminder.title}
            required
            />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={singleReminder.description}
            required
            rows={5}
            />
          <label>
            Important: 
            <input
              type="checkbox"
              name="important"
              checked={singleReminder.important}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
        <div className="goal-container">{allReminders.reverse()}</div>
      </div>
    )
}