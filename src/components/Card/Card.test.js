import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {
  let mockHouse;

  beforeEach(() => {
    mockHouse = {
      url: 'https://www.anapioficeandfire.com/api/houses/81',
      name: 'House Corbray of Heart\'s Home',
      coatOfArms: 'Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)',
      words: '',
      titles: [
        'Lord of Heart\'s Home',
        'King of the Fingers (historical)'
      ],
      seats: [
        'Heart\'s Home'
      ],
      founded: '',
      ancestralWeapons: [
        'Lady Forlorn'
      ]
    }
  })

  it('should match the snapshot', () => {    
    const wrapper = shallow(<Card houseInfo={mockHouse} />)
    expect(wrapper).toMatchSnapshot()
  })
})