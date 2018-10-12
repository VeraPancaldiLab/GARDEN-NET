import { CHANGED_CHROMOSOME, change_chromosome, CHANGED_FEATURE, change_feature } from './index'

describe('actions', () => {
  describe('chromosme_action', () => {
    it('should provide the change_chromosome action', () => {
      expect(change_chromosome('5')).toEqual({type: CHANGED_CHROMOSOME, chromosome: '5'})
    })
  })

  describe('feature_action', () => {
    it('should provide the change_selection action', () => {
      expect(change_feature('EZH2')).toEqual({type: CHANGED_FEATURE, feature: 'EZH2'})
    })
  })
})
