import { chromosomes_reducer, DEFAULT_CHROMOSOME, features_reducer, DEFAULT_FEATURE } from './index'
import { CHANGED_CHROMOSOME, CHANGED_FEATURE } from '../actions/index'

describe('reducers', () => {
  describe('chromosomes_reducer', () => {
    it('should provide the initial state', () => {
      expect(chromosomes_reducer(undefined, {})).toBe(DEFAULT_CHROMOSOME)
    })

    it('should handle CHANGED_CHROMOSOME action', () => {
      expect(chromosomes_reducer(DEFAULT_CHROMOSOME, { type: CHANGED_CHROMOSOME, chromosome: 'X' })).toBe('X')
    })

    it('should ignore unknown actions', () => {
      expect(chromosomes_reducer(DEFAULT_CHROMOSOME, { type: 'unknown' })).toBe(DEFAULT_CHROMOSOME)
    })
  })

  describe('features_reducer', () => {
    it('should provide the initial state', () => {
      expect(features_reducer(undefined, {})).toBe(DEFAULT_FEATURE)
    })

    it('should handle CHANGED_FEATURE action', () => {
      expect(features_reducer(DEFAULT_FEATURE, { type: CHANGED_FEATURE, feature: 'BRG1'})).toBe('BRG1')
    })

    it('should ignore unknown actions', () => {
      expect(features_reducer(DEFAULT_FEATURE, { type: 'unknown' })).toBe(DEFAULT_FEATURE)
    })
  })
})
