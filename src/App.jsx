import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AppNavigation from "../src/route/AppNavigation"
function App() {
 return(
  <div>
    <Navbar/>
    <AppNavigation />
    <Footer/>
  </div>
 )
}

export default App
