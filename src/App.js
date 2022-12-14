import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </NoteState>
      
    </>
  )
}

export default App
