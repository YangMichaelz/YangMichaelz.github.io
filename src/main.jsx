import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import './shootingStars.js';
import Header from "./components/Header.jsx"
import Aboutme from './components/Aboutme.jsx'
import HomePage from './components/HomePage.jsx'
import Projects from './components/Projects.jsx'

import {HashRouter, Routes, Route} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/aboutme" element={<Aboutme/>}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
