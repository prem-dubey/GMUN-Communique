import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/HeroSection'
import About from './components/About'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Events/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
