import { size_reducer, DEFAULT_SIZE, color_reducer, DEFAULT_COLOR, selection_reducer, DEFAULT_SELECTION, ESELECTION } from './index'
import { CHANGED_SIZE, CHANGED_COLOR, CHANGED_SELECTION } from '../actions/index'

describe('reducers', () => {
  describe('size_reducer', () => {
    it('should provide the initial state', () => {
      expect(size_reducer(undefined, {})).toBe(DEFAULT_SIZE)
    })

    it('should handle CHANGED_SIZE action', () => {
      expect(size_reducer(1, { type: CHANGED_SIZE, size: 10 })).toBe(10)
    })

    it('should ignore unknown actions', () => {
      expect(size_reducer(1, { type: 'unknown' })).toBe(1)
    })
  })

  describe('color_reducer', () => {
    it('should provide the initial state', () => {
      expect(color_reducer(undefined, {})).toBe(DEFAULT_COLOR)
    })

    it('should handle CHANGED_COLOR action', () => {
      expect(color_reducer("#AAAAAA", { type: CHANGED_COLOR, color: '#FFFFFF'})).toBe('#FFFFFF')
    })

    it('should ignore unknown actions', () => {
      expect(color_reducer('#FFFFFF', { type: 'unknown' })).toBe('#FFFFFF')
    })
  })

  describe('selection_reducer', () => {
    it('should provide the initial state', () => {
      expect(selection_reducer(undefined, {})).toBe(DEFAULT_SELECTION)
    })

    it('should handle CHANGED_SELECTION action', () => {
      expect(selection_reducer(ESELECTION.NODE, { type: CHANGED_SELECTION, selection: ESELECTION.BOTH})).toBe(ESELECTION.BOTH)
    })

    it('should handle CHANGED_SELECTION action', () => {
      expect(selection_reducer(ESELECTION.NODE, { type: CHANGED_SELECTION, selection: ESELECTION.EDGE})).toBe(ESELECTION.EDGE)
    })

    it('should handle CHANGED_SELECTION action', () => {
      expect(selection_reducer(ESELECTION.EDGE, { type: CHANGED_SELECTION, selection: ESELECTION.NODE})).toBe(ESELECTION.NODE)
    })

    it('should ignore unknown actions', () => {
      expect(selection_reducer(ESELECTION.NODE, { type: 'unknown' })).toBe(ESELECTION.NODE)
    })
  })
})
