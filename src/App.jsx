import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Overview from './components/overview/Overview'
function App() {

  return (
    <div className=' overflow-x-hidden bg-gradient-to-r from-[#090920] to-[#0d0d2b] w-screen min-h-screen'>
      <Navbar/>
      <Overview/>
    </div>
  )
}

export default App
