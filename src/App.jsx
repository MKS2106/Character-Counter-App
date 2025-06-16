import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'
import Toggler from '../../react-state-app/src/components/Toggler'
import SkillList from './components/SkillList/SkillList'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import UserList from './components/UserList/UserList'
function App() {
  return (
    <>
    {/* Intiate the App */}
      <CharacterCounter/> 
     
      {/* <Toggler/> */}
      {/* <SkillList/> */}      
      {/* <UserProfileCard user = {{name: "Alex", email:"xyz.email.com"}}/> */}
      {/* <UserList/> */}

    </>
  )
}

export default App
