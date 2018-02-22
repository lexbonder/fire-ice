import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Container from '../Container/Container';
import { addHousesToStore } from '../../actions';
import { getHouseData } from '../../apiCalls';

class App extends Component {

  componentDidMount = async () => {
    const houses = await getHouseData();
    this.props.addHousesToStore(houses);
  }

  // showCards = () => {
  //   const { houses } = this.props;
  //   if (!houses.length) {
  //     return <img src={wolf} alt='wolf running' />
  //   } else {
  //     return <Container />
  //   }
  // }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {/*<button onClick={this.handleClick}>Get Houses</button>*/}
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
  ),
  addHousesToStore: func
};

const mapStateToProps = ({ houses }) => ({ houses });

const mapDispatchToProps = dispatch => ({ 
  addHousesToStore: houses => dispatch(addHousesToStore(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
