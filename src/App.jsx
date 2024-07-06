import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      <h1>Welcome</h1>
      <Navbar/>
      <Routes>
      <Route path='/'element={<Add/>}></Route>
      <Route path='/home' element={<View/>}></Route>
    
      </Routes>
    
    
       
      
    </>
  )
}

export default App
