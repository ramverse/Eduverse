import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import playicon from '../../assets/playicon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt="about-img" className='about-img' />
              <img src={playicon} alt="play-img" className='play-icon'/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow's leaders today</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, necessitatibus est. Repellat, nam ut! Eveniet asperiores accusamus culpa, fuga perferendis provident numquam! Et neque omnis quas at alias? Praesentium corporis, ipsa reiciendis architecto neque magnam quos explicabo dicta distinctio rem fuga, eius culpa laborum quisquam dolores debitis quam, quas esse?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam quis nemo veritatis ipsa tempore libero, quaerat itaque placeat fuga!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus animi placeat repellat quidem iusto?</p>        
        </div>
        
    </div>
  )
}

export default About
