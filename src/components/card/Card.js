// import css files and react dependencies
import React from 'react'
import './Card.css'

//set up the props needed for character cards
///set up the info just in case the img does not load
const Card = (props) => (
  // use onclick method for jsx
  <div className='characterCard' onClick={() => props.clickCount(props.id)}>
    <div className='imgContainer'>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
)

export default Card
