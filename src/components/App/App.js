import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import wolf from '../../wolf.gif'
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

  showCards = () => {
    const { houses } = this.props;
    if (!houses.length) {
      return <img src={wolf} alt='wolf running' />
    } else {
      return <Container />
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={this.handleClick}>Get Houses</button>
        </div>
        <div className='Display-info'>
          {this.showCards()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ houses }) => ({ houses });

const mapDispatchToProps = dispatch => ({ 
  addHousesToStore: houses => dispatch(addHousesToStore(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
