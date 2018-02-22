import { getHouseData } from './apiCalls';
import { houses } from './mockData';

describe('getHouseData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        houses
      })
    }))
      
  })

  it('should be called with the correct params', async () => {
    const expected = 'http://localhost:3001/api/v1/houses'
    getHouseData()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('returns houses if status is ok', () => {
    expect(getHouseData()).resolves.toEqual({houses})
  })

  it('should return an error when the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    expect(getHouseData()).resolves.toEqual('Error')
  })
})