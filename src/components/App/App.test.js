import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { houses } from '../../mockData';

jest.mock('../../apiCalls')

describe('App', () => {
  let wrapper;
  let mockAddHousesToStore;
  let mockHouses;

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      houses
    })
  }))

  beforeEach(() => {
    mockHouses = houses;
    mockAddHousesToStore = jest.fn()
    wrapper = shallow(<App addHousesToStore={mockAddHousesToStore} />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    it('should call addHousesToStore with a houses object', async () => {
      wrapper.instance().mockAddHousesToStore = jest.fn()
      wrapper.instance().getHouseData = jest.fn().mockImplementation(()=> mockHouses)
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().mockAddHousesToStore).toHaveBeenCalledWith(mockHouses)
    })
  })

 

})