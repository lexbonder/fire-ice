import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';

export class Container extends Component {

  housesToRender = () => {
    const { houses } = this.props;
    if (!houses.length) {
      return <img src={wolf} alt='wolf running' />
    } else {
      return houses.map( house => <Card houseInfo={house} />)
    }
  }

  render() {
    return (
      <div className='Container'>
        {this.housesToRender()}
      </div>
    )
  }
}

export const mapStateToProps = ({houses}) => ({houses})

export default connect(mapStateToProps)(Container);
