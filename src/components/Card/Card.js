import React from 'react';
import PropTypes from 'prop-types';


export const Card = ({houseInfo}) => {
  const {
    name,
    founded,
    seats,
    titles,
    coatOfArms,
    ancestralWeapons,
    words
  } = houseInfo;

const seatsToRender = () => {
  return seats.map( (seat, index) => <h3 key={index}>{seat}</h3>)
}

const titlesToRender = () => {
  return titles.map( (title, index) => <h3 key={index}>{title}</h3>)
}

const weaponsToRender = () => {
  return ancestralWeapons.map( (weapon, index) => <h3 key={index}>{weapon}</h3>)
}

  return (
    <div className='Card'>
      <h1>{name}</h1>
      <h2>{founded}</h2>
      <h2>Seats</h2>
      {seatsToRender()}
      <h2>Titles</h2>
      {titlesToRender()}
      <h2>{coatOfArms}</h2>
      <h2>Ancestral Weapons</h2>
      {weaponsToRender()} 
      <h2>{words}</h2>
    </div>
  );
};

const { arrayOf, shape, string } = PropTypes;

Card.propTypes = {
  houseInfo: shape({
    url: string,
    name: string,
    coatOfArms: string,
    words: string,
    titles: arrayOf(string),
    seats: arrayOf(string),
    founded: string,
    ancestralWeapons: arrayOf(string)
  })
};