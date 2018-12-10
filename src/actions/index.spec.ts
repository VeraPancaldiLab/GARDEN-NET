import { CHANGED_CHROMOSOME, change_chromosome, CHANGED_FEATURE, change_feature, CHANGED_DOWNLOAD, change_download } from './index'

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

  describe('download_action', () => {
    it('should provide the change_download action', () => {
      expect(change_download('http://localhost:8080/data/chromosomes/chr1.json')).toEqual({type: CHANGED_DOWNLOAD, download: 'http://localhost:8080/data/chromosomes/chr1.json'})
    })
  })
})
