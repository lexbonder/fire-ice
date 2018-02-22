import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Container from '../Container/Container';
import { addHousesToStore } from '../../actions';
import { getHouseData } from '../../apiCalls';
import { houseCleaner } from '../../dataCleaner';

export class App extends Component {

  componentDidMount = async () => {
    const rawHouses = await getHouseData();
    const houses = houseCleaner(rawHouses);
    this.props.addHousesToStore(houses);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <Container />
        </div>
      </div>
    );
  }
}

const { arrayOf, shape, string, func } = PropTypes;

App.propTypes = {
  houses: arrayOf(
    shape({
      url: string,
      name: string,
      coatOfArms: string,
      words: string,
      titles: arrayOf(string),
      seats: arrayOf(string),
      founded: string,
      ancestralWeapons: arrayOf(string)
    })
  ),
  addHousesToStore: func
};

export const mapStateToProps = ({ houses }) => ({ houses });

export const mapDispatchToProps = dispatch => ({ 
  addHousesToStore: houses => dispatch(addHousesToStore(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
