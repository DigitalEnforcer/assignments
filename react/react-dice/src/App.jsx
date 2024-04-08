import React from 'react'
import DiceBox from './DiceBox'
import './App.css'

function App() {
const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])

function roll(){
  const newNumbers = numbers.map(() => Math.floor(Math.random() * 6) + 1)
  setNumbers(newNumbers)
}

  return (
    <>
      <DiceBox number={numbers} handleClick={roll}/>
    </>
  )
}

export default App
