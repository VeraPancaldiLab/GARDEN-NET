import * as Reducer from './index'
import { CHANGED_CHROMOSOME, CHANGED_FEATURE, CHANGED_GENE } from '../actions/index'

describe('reducers', () => {
  describe('chromosomes_reducer', () => {
    it('should provide the initial state', () => {
      expect(Reducer.chromosomes_reducer(undefined, {})).toBe(Reducer.DEFAULT_CHROMOSOME)
    })

    it('should handle CHANGED_CHROMOSOME action', () => {
      expect(Reducer.chromosomes_reducer(Reducer.DEFAULT_CHROMOSOME, { type: CHANGED_CHROMOSOME, chromosome: 'X' })).toBe('X')
    })

    it('should ignore unknown actions', () => {
      expect(Reducer.chromosomes_reducer(Reducer.DEFAULT_CHROMOSOME, { type: 'unknown' })).toBe(Reducer.DEFAULT_CHROMOSOME)
    })
  })

  describe('features_reducer', () => {
    it('should provide the initial state', () => {
      expect(Reducer.features_reducer(undefined, {})).toBe(Reducer.DEFAULT_FEATURE)
    })

    it('should handle CHANGED_FEATURE action', () => {
      expect(Reducer.features_reducer(Reducer.DEFAULT_FEATURE, { type: CHANGED_FEATURE, feature: 'BRG1'})).toBe('BRG1')
    })

    it('should ignore unknown actions', () => {
      expect(Reducer.features_reducer(Reducer.DEFAULT_FEATURE, { type: 'unknown' })).toBe(Reducer.DEFAULT_FEATURE)
    })
  })

  describe('genes_reducer', () => {
    it('should provide the initial state', () => {
      expect(Reducer.genes_reducer(undefined, {})).toBe(Reducer.DEFAULT_GENE)
    })

    it('should handle CHANGED_GENE action', () => {
      expect(Reducer.genes_reducer(Reducer.DEFAULT_GENE, { type: CHANGED_GENE, gene: 'Hoxa1'})).toBe('Hoxa1')
    })

    it('should ignore unknown actions', () => {
      expect(Reducer.genes_reducer(Reducer.DEFAULT_GENE, { type: 'unknown' })).toBe(Reducer.DEFAULT_GENE)
    })
  })
})
