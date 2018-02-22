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

  return (
    <div className='Card'>
      <h1>{name}</h1>
      <h3>{founded}</h3>
      <h3>{seats}</h3>
      <h3>{titles}</h3>
      <h3>{coatOfArms}</h3>
      <h3>{ancestralWeapons}</h3>
      <h3>{words}</h3>
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