import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
     <Navbar/>
      <Hero/>
<Title subheading='Our Programs' Heading='What We Offer'/>
      <div className="container">    <Programs/></div>
     <About/>
     <Title subheading='Gallery' Heading='Campus Photos '/>
<Campus/>


     <Title subheading='Testimonials' Heading='What students says'/>

    <Testimonials/>

         <Title subheading='Contact Us ' Heading='Get in touch'/>
         <Contact/>

    </div>
  )
}

export default App
