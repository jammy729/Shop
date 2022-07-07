import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
imoprt Home from 
const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
