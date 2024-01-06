import { Config } from './interfaces'

export default class CircuitBreaker {
  config: Config
  failures: number
  constructor(config = {}) {
    this.failures = 0
    this.config = {
      failureThreshold: 10,
      logContext: {requestUrl: ''},
      name: 'CircuitBreaker',
      randomThreshold: 0.9,
      fallback: [],
      action: () => [],
       ...config
    }
  }

  async fire() {
    try {
      if (this.isCircuitOpen()) {
        this.randomlyTestAndDecrementFailures()

        return this.config.fallback
      }

      const result = await this.config.action()
      this.randomlyDecrementFailures()

      return result
    } catch (err) {
      this.failures++
      console.log(`Error in ${this.config.name}: ${err}`)
    }
  }

  isCircuitOpen() {
    return this.failures > this.config.failureThreshold
  }

  async randomlyTestAndDecrementFailures() {
    try {
      if (this.failures && Math.random() > this.config.randomThreshold) {
        await this.config.action()
        this.decrementFailure()
      }
    } catch (err) {
      console.log(`Failed to test and decrement failure: ${err}`)
    }
  }

  decrementFailure() {
    this.failures = this.failures < 2 ? 0 : this.failures - 1
  }

  randomlyDecrementFailures() {
    if (this.failures >= 0 && Math.random() > this.config.randomThreshold) {
      this.decrementFailure()
    }
  }
}
