import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'


const App = () => {
  return (
    <div>
     <Navbar/>
      <Hero/>
<Title subheading='Our Programs' Heading='What We Offer'/>
      <div className="container">    <Programs/></div>
     

    </div>
  )
}

export default App
