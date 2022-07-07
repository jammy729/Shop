import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'

import Navbar from './components/Navbar'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/shop' element={<Shop />} />

      </Routes>
    </Router>
  )
}

export default App
