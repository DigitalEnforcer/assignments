import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'
import {format} from 'date-fns'

export default function Goals (){
    const [goals, setGoals] = useState([])
    const [singleGoal, setSingleGoal] = useState({
        title:"",
        description:""
    })

    function getGoals (){
        axios.get("/api/goals")
        .then(res => setGoals(res.data))
        .catch(err => console.log(err))
      }
    
    function deleteGoal (goalId){
        axios.delete(`/api/goals/${goalId}`)
        .then (res => setGoals(prevGoals => prevGoals.filter(goal => goal._id !== goalId)))
        .catch(err => console.log(err))
    }

    function addGoal (newGoal){
      axios.post (`/api/goals`, newGoal)
      .then (res => {setGoals(prevGoals => [...prevGoals, res.data])})
      .catch (err => console.log(err))
    }

    function handleChange (event){
      const {name, value} = event.target;
      setSingleGoal(prevSingleGoal => ({
          ...prevSingleGoal,
          [name]: value
      }))
    }

    function handleSubmit (e){
      e.preventDefault()
      addGoal(singleGoal)
      setSingleGoal({title:"", description:""})
    }

      useEffect(()=> {
        getGoals()
      }, [])

    const allGoals = goals.map((goal)=> {
                        const formattedDate = format(new Date(goal.createdAt), 'PPpp')

                        return (
                        <div key={goal._id} className = "goal-item">
                            <h2>{goal.title}</h2>
                            <p>{goal.description}</p>
                            <h6>Created: {formattedDate}</h6>
                            <button className ="delete-btn" onClick = {() => deleteGoal(goal._id)}>Delete</button>
                        </div>
                        )
    })
      
    return (
      <div className="form-container">
        <form onSubmit ={handleSubmit}>
          <input 
            type="text"
            placeholder="Title of Goal"
            name="title"
            onChange={handleChange}
            value={singleGoal.title}
            required
          />
          <textarea
            type="text"
            placeholder="Description of Goal"
            name="description"
            onChange={handleChange}
            value={singleGoal.description}
            required
            rows={6}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="goal-container">{allGoals.reverse()}</div>
    </div>
    )
}