
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Goals from './routes/Goals'
import Journals from './routes/Journals'
import Reminders from './routes/Reminders'
import Websites from './routes/Websites'

function App() {


  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/goals" className="nav-link">Goals</Link>
          <Link to="/journals" className="nav-link">Journal Entry</Link>
          <Link to="/reminders" className="nav-link">Reminders</Link>
          <Link to="/websites" className="nav-link">Favorite Websites</Link>
        </nav>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/goals" element = {<Goals/>}/>
          <Route path = "/journals" element = {<Journals/>}/>
          <Route path = "/reminders" element = {<Reminders/>}/>
          <Route path = "/websites" element = {<Websites/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
