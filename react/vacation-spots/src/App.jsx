import React from "react"
import Card from "./Card"
import Data from "./data.js"
import './App.css'

export default function App (){
  const posts = Data.map(spot => {
      return (
          <Card
              key ={spot.id}
              spot = {spot}    
          />
      )
  })
  return (
      <div>
          <section className="card">
              {posts}
          </section>
          
      </div>
      )
}


