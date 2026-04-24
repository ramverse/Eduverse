import React from 'react'
import './Title.css'

const Title = ({subheading,Heading}) => {
  return (
    <div className='title'>
      <p>{subheading}</p>
      <h2>{Heading}</h2>
    </div>
  )
}

export default Title
