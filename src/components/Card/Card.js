import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSwornMember } from '../../apiCalls';


export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swornMembers: []
    }
  }

  seatsToRender = () => {
    const { seats } = this.props.houseInfo;
    return seats.map( (seat, index) => <h3 key={index}>{seat}</h3>);
  }

  titlesToRender = () => {
    const { titles } = this.props.houseInfo;
    return titles.map( (title, index) => <h3 key={index}>{title}</h3>);
  }

  weaponsToRender = () => {
    const { ancestralWeapons } = this.props.houseInfo;
    return ancestralWeapons.map( (weapon, index) => <h3 key={index}>{weapon}</h3>);
  }

  swornMembersToRender = () => {
    this.state.swornMemberIds.forEach( async (id) => {
      getSwornMember(id)
      // DIDN'T FINISH API CALL.. PROBABLY BROKEN. BUT ON THE RIGHT TRACK FOR SURE
  })

  toggleSwornMembers = () => {
    const { swornMemberIds } = this.props.houseInfo;
    // console.log(swornMemberIds)
    if (!this.state.swornMembers.length) {
      this.setState({swornMembers: swornMemberIds})
    } else {
      this.setState({swornMembers: []})
    }
  }



  render () {
    const { name, founded, coatOfArms, words } = this.props.houseInfo;
    return (
      <div 
        onClick={this.toggleSwornMembers}
        className='Card'
      >
        <h1>{name}</h1>
        <h2>{founded}</h2>
        <h2>Seats</h2>
        {this.seatsToRender()}
        <h2>Titles</h2>
        {this.titlesToRender()}
        <h2>{coatOfArms}</h2>
        <h2>Ancestral Weapons</h2>
        {this.weaponsToRender()} 
        <h2>{words}</h2>
        {this.state.swornMembers}
      </div>
    );
  };
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