import React from 'react';
import { shallow } from 'enzyme';
import { Container } from './Container';

describe('Container', () => {

  describe('housesToRender', () => {
    it('should match the snapshot if it gets an array of houses from props', () => {
      const mockHouses = [
        { house: 'yay', url: '1' },
        { house: 'fun times', url: '2' }
      ]
      const wrapper = shallow(<Container houses={mockHouses}/>)
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if it gets an empty array from props', () => {
      const mockHouses = []
      const wrapper = shallow(<Container houses={mockHouses}/>)
      expect(wrapper).toMatchSnapshot()
    })
  })
})