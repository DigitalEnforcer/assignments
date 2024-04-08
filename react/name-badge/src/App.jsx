import React from 'react'
import BadgeInfo from './BadgeInfo'
import BadgeCard from './BadgeCard'
import './App.css'

function App() {
  const [badges, setBadges] = React.useState([])


  const newBadges = badges.map(badge=> {
    return (
      <BadgeCard 
          key = {badge.email}
          {...badge}
        />
    )
  })
  console.log(badges)
return (
    <div>
      <BadgeInfo setBadges={setBadges}/> 
      {newBadges}
    </div>
  )
}

export default App

