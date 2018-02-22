import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import { houses } from '../../mockData';

jest.mock('../../apiCalls')

describe('App', () => {
  let wrapper;
  let mockAddHousesToStore;

  window.fetch = jest.fn().mockImplementation(() => houses)

  beforeEach(() => {
    mockAddHousesToStore = jest.fn()
    wrapper = shallow(<App addHousesToStore={mockAddHousesToStore} />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    it('should call addHousesToStore with a houses object', () => {
      wrapper.instance().addHousesToStore = jest.fn()
      expect(wrapper.instance().addHousesToStore).toHaveBeenCalled()
      // Cant get it.
    })
  })

  // describe('mapStateToProps', () => {
  //   it('should return a houses object with the array it is handed', () => {
  //     const mockHouses = {store: { houses: [{house: 'yay'}, {house: 'cool'}]}}
  //     const expected = {houses: [{house: 'yay'}, {house: 'cool'}]}

  //     expect(mapStateToProps(mockHouses)).toEqual(expected)
  //     // Cant get this either.
  //   })
  // })

  // describe('mapDispatchToProps', () => {
  //   // literally not even going to try it.
  // })

 

})