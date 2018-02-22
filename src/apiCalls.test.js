import { getHouseData } from './apiCalls';
import mockData from './mockData';

describe('getHouseData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      let mockFetch = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => ({mockData})
        })
      })
      return mockFetch;
    })
  })

  it('should retrieve house data', async () => {
    expect(await getHouseData()).toEqual({mockData})
  })

  it('should return an error when the fetch fails', () => {
    
  })
})