import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const [woman, live, dumb] = ["time", "love", "energy"]

console.log(React.useState)
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize', handleResize)

    return () =>{
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
  
      <div>
        {windowWidth}
      </div>
  

  )
}

export default App
