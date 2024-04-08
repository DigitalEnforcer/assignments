import React from 'react'
import './App.css'


function App() {
  const [formData, setFormData]= React.useState([])
  const [formList, setFormList]= React.useState([])

  function handleChange(event) {
    setFormData([event.target.value])
  }

  function finalList (){
    setFormList(prevList => [...prevList, formData])

  }

  const list = formList.map(item => <li key={item}>{item}</li>)
    return (
      <>
        <input type="text" placeholder = "Enter Text Here" onChange={handleChange}></input>
        <button onClick={finalList}>Submit</button>
        <h1>{formData}</h1>
        <ol>{list}</ol>
      </>
    )
  }

export default App
