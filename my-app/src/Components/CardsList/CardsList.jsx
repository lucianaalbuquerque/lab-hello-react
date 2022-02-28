import React from 'react';
import Cards from './Cards';
import declarativeImage from '../../images/icon1.png'
import componentsImage from '../../images/icon2.png'
import singlewayImage from '../../images/icon3.png'
import jsxImage from '../../images/icon4.png'

const cards = [
  {
    title: 'Declarative',
    image: declarativeImage,
    text: 'Reac makes it painless to create interactive UIs'
  }, 
  {
    title: 'Components',
    image: componentsImage,
    text: 'Build encapsulated components that manage their state'
  }, 
  {
    title: 'Single-Way',
    image: singlewayImage,
    text: 'A set of immutable values are passed to components'
  }, 
  {
    title: 'JSX',
    image: jsxImage,
    text: 'Statically-typed designed to run on modern browsers'
  }
]

function CardsList() {
  return (
    <div className='cardsList'>
      <Cards info={cards[0]} />
      <Cards info={cards[1]} />
      <Cards info={cards[2]} />
      <Cards info={cards[3]} />
    </div>
  )
}

export default CardsList