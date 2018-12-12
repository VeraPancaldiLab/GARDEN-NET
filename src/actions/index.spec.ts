import * as Action from './index'

describe('actions', () => {
  describe('chromosomes_action', () => {
    it('should provide the change_chromosome action', () => {
      expect(Action.change_chromosome('5')).toEqual({type: Action.CHANGED_CHROMOSOME, chromosome: '5'})
    })
  })

  describe('features_action', () => {
    it('should provide the change_selection action', () => {
      expect(Action.change_feature('EZH2')).toEqual({type: Action.CHANGED_FEATURE, feature: 'EZH2'})
    })
  })

  describe('download_action', () => {
    it('should provide the change_download action', () => {
      expect(Action.change_download('http://localhost:8080/data/chromosomes/chr1.json')).toEqual({type: Action.CHANGED_DOWNLOAD, download: 'http://localhost:8080/data/chromosomes/chr1.json'})
    })
  })

  describe('genes_action', () => {
    it('should provide the change_gene action', () => {
      expect(Action.change_gene('Hoxa1')).toEqual({type: Action.CHANGED_GENE, gene: 'Hoxa1'})
    })
  })
})
