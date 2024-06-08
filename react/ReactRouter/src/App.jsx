import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" style={{padding: 10}}>Home</Link>
        <Link to="/about" style={{padding: 10}}>About</Link>
        <Link to="/services" style = {{padding: 10}}>Services</Link>
      </nav>
      <h1 className="title">PLUMB IT!</h1>
      <h3 className="subtitle">It's Plumbing Time...</h3>
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/about" element ={<About />}/>
        <Route path ="/services" element ={<Services />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
