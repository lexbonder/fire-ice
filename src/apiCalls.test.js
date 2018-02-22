import { getHouseData } from './apiCalls';

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      let mockFetch = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => ({})
        })
      })
    })
  })
})