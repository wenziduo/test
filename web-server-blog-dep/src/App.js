import React from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from './layout/Layout'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Layout} />
      </Router>
    </div>
  )
}

export default App
