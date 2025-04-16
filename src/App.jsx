import React from 'react'
import Navbar from './components/navbar/Navbar'
import Overview from './components/overview/Overview'
import Hero from './Pages/Home'
function App() {

  return (
    <div className=' overflow-x-hidden bg-gradient-to-r from-[#090920] to-[#0d0d2b] w-screen min-h-screen'>
      <Navbar/>
      <Hero />
      <Overview/>
     
    </div>
  )
}

export default App