import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
imprt Home from "./pages/Home.js"
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
