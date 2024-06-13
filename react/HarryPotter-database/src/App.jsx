import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./Home"
import Houses from "./Houses"
import Spells from "./Spells"
import Characters from "./Characters"
import axios from 'axios'
import './App.css'
import CharacterInfo from "./CharacterInfo"
import AudioPlayer from './AudioPlayer'

function App() {



  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav-link" >Home</Link>
          <Link to="/characters" className="nav-link" >Characters</Link>
          <Link to="/houses" className="nav-link" >Houses</Link>
          <Link to="/spells" className="nav-link" >Spells</Link>
          <div className="playButton">
              <AudioPlayer src="/Prologue.mp3"/>
          </div>
        </nav>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/characters" element ={<Characters/>}/>
          <Route path="/characters/:id" element={<CharacterInfo />}/>
          <Route path="/spells" element ={<Spells/>}/>
          <Route path="/houses" element ={<Houses />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
