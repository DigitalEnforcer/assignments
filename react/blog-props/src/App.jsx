import { useState } from 'react'
import Header from "./components/Header"
import Blogpost from "./components/Blogpost"
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <div>
        <Header />
        <Blogpost />
        <Footer />
    </div>
  )
}

export default App
