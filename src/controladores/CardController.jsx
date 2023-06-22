import React from 'react';
import '../CSSYLES/card2.css'

const CardController = ({ image, name, value, text,fecha }) => {
  return  (
    
    <div className="card1">
      <img src={image} alt={name} className="card1-image" />
      <h3 className="card1-name">{name}</h3>
      <div className="card1-info">
        <span className="card1-value">{value}</span>
        <p className="card1-text">{text}</p>
      </div>
      <p className='card1-fecha'>{fecha}</p>
    </div>
  );
};

export default CardController;