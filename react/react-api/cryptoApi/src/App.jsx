import { useState,} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import HomePage from './components/HomePage/HomePage.jsx'
import {Routes, Route, Link, useParams} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
