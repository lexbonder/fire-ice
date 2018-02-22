import * as actions from './index';

describe('Actions', () => {
  it('addHousesToStore should return an object with a type ADD_HOUSES_TO_STORE and a houses object', () => {
    const houses = [{house: 'yup'}, {house: 'a big one'}]
    const expected = {
      type: 'ADD_HOUSES_TO_STORE',
      houses
    }

    expect(actions.addHousesToStore(houses)).toEqual(expected)
  })
})