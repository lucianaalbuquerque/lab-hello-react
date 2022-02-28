import React from 'react';
import './Cards.css';

function Cards(props) {
  return (
    <div className="card">
        <img src={props.info.image} alt="" />
        <h3>{props.info.title}</h3>
        <p>{props.info.text}</p>
    </div>
  )
}

export default Cards