import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Websites (){

    const [websites, setWebsites] = useState([])
    const [singleWebsite, setSingleWebsite] = useState({
        title:"",
        website:"",
        genre:""
    })


    function getWebsites (){
        axios.get("/api/websites")
        .then(res => setWebsites(res.data))
        .catch(err => console.log(err))
      }
     
    function deleteWebsite (websiteId){
        axios.delete(`/api/websites/${websiteId}`)
        .then (res => setWebsites(prevWebsites => prevWebsites.filter(website => website._id !== websiteId)))
        .catch(err => console.log(err))
    }

    function addWebsite (newWebsite){
      axios.post (`/api/websites`, newWebsite)
      .then (res => {setWebsites(prevWebsites => [...prevWebsites, res.data])})
      .catch (err => console.log(err))
    }

    function handleChange (event){
      const {name, value} = event.target;
      setSingleWebsite(prevSingleWebsite => ({
          ...prevSingleWebsite,
          [name]: value
      }))
    }

    function handleSubmit (e){
      e.preventDefault()
      addWebsite(singleWebsite)
      setSingleWebsite({title:"", website:"", genre:""})
    }

      useEffect(()=> {
        getWebsites()
      }, [])

      const allWebsites = websites.map((website)=> (
        <div key={website._id} className = "website-item">
            <h2>
                <a href ={`http://${website.website}`}> {website.title}</a>
            </h2>
            <p>
                <a href ={`http://${website.website}`}> {website.website}</a></p>
            <h6>Genre: {website.genre}</h6>
            <button className ="delete-btn" onClick = {() => deleteWebsite(website._id)}>Delete</button>
        </div>
      ))

    return (
      <div className = "webform-container">
        <form onSubmit ={handleSubmit}>
          <input 
            type="text"
            placeholder="Website Name"
            name="title"
            onChange={handleChange}
            value={singleWebsite.title}
            required
            />
          <input
            type="text"
            placeholder="Web Address"
            name="website"
            onChange={handleChange}
            value={singleWebsite.website}
            required
            />
          <input  
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
            value={singleWebsite.genre}
          />

          <button type="submit">Submit</button>
        </form>
        <div className="website-container">{allWebsites.reverse()}</div>
      </div>
    )
}

