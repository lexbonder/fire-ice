import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import wolf from '../../wolf.gif';
import PropTypes from 'prop-types';


export class Container extends Component {

  housesToRender = () => {
    const { houses } = this.props;
    if (!houses.length) {
      return <img src={wolf} alt='wolf running' />;
    } else {
      return houses.map( house => <Card key={house.url} houseInfo={house} />);
    }
  }

  render() {
    return (
      <div className='Container'>
        {this.housesToRender()}
      </div>
    );
  }
}

const { arrayOf, shape, string } = PropTypes;

Container.propTypes = {
  houses: arrayOf(
    shape({
      url: string,
      name: string,
      region: string,
      coatOfArms: string,
      words: string,
      titles: arrayOf(string),
      seats: arrayOf(string),
      currentLord: string,
      heir: string,
      overlord: string,
      founded: string,
      founder: string,
      diedOut: string,
      ancestralWeapons: arrayOf(string),
      cadetBranches: arrayOf(string),
      swornMemebers: arrayOf(string)
    })
  )
};

export const mapStateToProps = ({houses}) => ({houses});

export default connect(mapStateToProps)(Container);
