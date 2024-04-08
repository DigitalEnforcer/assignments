import React from 'react'
import './App.css'
import BigTimeDj from './BigTimeDj'
import SmallTime from './Smalltime'
import ProfessionalDj from './ProfessionalDj'
import PartyDj from './PartyDj'

function App() {
const [squares, setSquares]= React.useState(["red", "white", "black", "white"])
const newAudio = new Audio('./src/assets/button.wav')
const newAudio2 = new Audio('./src/assets/believer.mp3')

function playMusic(){
  newAudio.play()
}

function playPiano(){
  newAudio2.play()
}

function smallTimeDJ (){
  if (squares[0] !== "white"){
    setSquares(prevSquares => {
      return (prevSquares.map(color => (color="white")))
      })
    }
  else if (squares[0] === "white"){
    setSquares(prevSquares => {
      return (prevSquares.map(color => (color="black")))
    })
    }
}

function partyDj (){
  const newSquares = [...squares]
  newSquares[0]="purple"
  newSquares[1]="purple"
  setSquares(newSquares)
}

function professionalDjone (){
  const newSquares = [...squares]
  newSquares[2]="blue"
  setSquares(newSquares)

}

function professionalDjtwo (){
  const newSquares = [...squares]
  newSquares[3]="blue"
  setSquares(newSquares)

}

function bigTimeDjOne (){
  const newSquares = [...squares]
  newSquares[0] = "yellow"
  setSquares(newSquares)
}

function bigTimeDjTwo (){
  const newSquares = [...squares]
  newSquares[1] = "orange"
  setSquares(newSquares)
}

function bigTimeDjThree (){
  const newSquares = [...squares]
  newSquares[2] = "brown"
  setSquares(newSquares)
}

function bigTimeDjFour (){
  const newSquares = [...squares]
  newSquares[3] = "grey"
  setSquares(newSquares)
}

const squareElements = squares.map(square => (
  <div style = {{backgroundColor:square}} className="box" key={square.id}></div>
))

  return (
    <>
    <main>
      <div className="boxes">      
        {squareElements}
      </div>
      <div className="buttons" onClick={playMusic}>
      <button onClick={playPiano}>Music</button>
        <SmallTime handleClick={smallTimeDJ}/>
        <PartyDj handleClick={partyDj}/>
        <ProfessionalDj handleClick={professionalDjone} anotherClick={professionalDjtwo}/>
        <BigTimeDj oneClick={bigTimeDjOne} twoClick={bigTimeDjTwo} threeClick={bigTimeDjThree} fourClick={bigTimeDjFour}/>  
      </div>
    </main>
    </>
  )
}

export default App
