import CircuitBreaker from './circuit-breaker'
import * as axiosWrapper from './axios-wrapper'
import { Song } from './interfaces'

const fetchSongsCircuitBreaker = new CircuitBreaker({
  action() {
    return axiosWrapper.get('https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json', {
      timeout: 3500
    })
  },
  fallback: [],
  logContext: { requestUrl: 'https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json' },
  name: 'Fetch Songs Circuit Breaker'
})

export function fetchSongs() {
  return fetchSongsCircuitBreaker.fire()
}

export function fetchSongsWithoutBreaker () {
  try {
    return axiosWrapper.get('https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json', {
      timeout: 3500
    })
  } catch (err) {
    console.log('error: ', err)
  }

}