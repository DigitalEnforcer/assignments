import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'
import {format} from 'date-fns'

export default function Journals (){

  const [journals, setJournals] = useState([])
  const [singleJournal, setSingleJournal] = useState({
          title:"",
          journalEntry:""
  })

    function getJournals (){
        axios.get("/api/journals")
        .then(res => setJournals(res.data))
        .catch(err => console.log(err))
    }
    
    function deleteJournal (journalId){
        axios.delete(`/api/journals/${journalId}`)
        .then (res => setJournals(prevJournals => prevJournals.filter(journal => journal._id !== journalId)))
        .catch(err => console.log(err))
    }

    function addJournal (newJournal){
      axios.post (`/api/journals`, newJournal)
      .then (res => {setJournals(prevJournals => [...prevJournals, res.data])})
      .catch (err => console.log(err))
    }

    function handleChange (event){
      const {name, value} = event.target;
      setSingleJournal(prevSingleJournal => ({
          ...prevSingleJournal,
          [name]: value
      }))
    }

    function handleSubmit (e){
      e.preventDefault()
      addJournal(singleJournal)
      setSingleJournal({title:"", journalEntry:""})
    }

      useEffect(()=> {
        getJournals()
      }, [])

    const allJournals = journals.map((journal)=> {
                        const formattedDate = format(new Date(journal.createdAt), 'PPpp')

                        return (
                        <div key={journal._id} className = "goal-item">
                            <h2>{journal.title}</h2>
                            <p>{journal.journalEntry}</p>
                            <h6>Created: {formattedDate}</h6>
                            <button className ="delete-btn" onClick = {() => deleteJournal(journal._id)}>Delete</button>
                        </div>
                        )
})

    return (
      <div className="form-container">
        <form onSubmit ={handleSubmit}>
          <input 
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={singleJournal.title}
            required
            />
          <textarea
            type="text"
            placeholder="Journal Entry"
            name="journalEntry"
            onChange={handleChange}
            value={singleJournal.journalEntry}
            required
            rows={15}
            />
          <button type="submit">Submit</button>
        </form>
        <div className="goal-container">{allJournals.reverse()}</div>
      </div>
      )
    }