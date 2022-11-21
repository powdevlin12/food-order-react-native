import camelize from 'camelize'
import { mocks } from './mock'

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    mocks[location] ? resolve(mocks[location]) : reject([])
  })
}

