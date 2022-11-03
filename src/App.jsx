import { useState } from 'react'
import './App.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Navigator from './components/Navigator'
import Home from './components/Home'
import Message from './components/Message'
import Profile from './components/Profile'

function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigator/>}>
          <Route path='Home' element={<Home/>}/>
          <Route path='Message' element={<Message/>}/>
        </Route>

        <Route path='Profile' element={<Profile/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
