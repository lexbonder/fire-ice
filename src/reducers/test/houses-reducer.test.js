import {houses} from '../houses-reducer';

describe('houses-reducer', () => {
  it('should return an empty array by default', () => {
    expect(houses(undefined, {})).toEqual([])
  })

  it('should return an array of houses if the type is ADD_HOUSES_TO_STORE', () => {
    const expected = [{house: 'yup'}, {house: 'a big one'}]
    const mockAction = {
      type: 'ADD_HOUSES_TO_STORE',
      houses: [
        {house: 'yup'},
        {house: 'a big one'}
      ]
    }

    expect(houses(undefined, mockAction)).toEqual(expected)
  })
})