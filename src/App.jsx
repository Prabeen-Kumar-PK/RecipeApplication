import React from 'react'
import MainRoute from './Routes/MainRoute'
import Navbar from './components/Navbar'
import Cuisine from './components/Cuisine'

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100 no-scrollbar">
        <Navbar/>
        <Cuisine/>
        <MainRoute/>
      </div>
    </div>
  )
}

export default App