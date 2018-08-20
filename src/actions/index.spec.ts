import { CHANGED_SIZE, change_size, CHANGED_COLOR, change_color, CHANGED_SELECTION, change_selection} from './index'
import { ESELECTION } from '../reducers/selection_reducer'

describe('actions', () => {
  describe('size_action', () => {
    it('should provide the change_size action', () => {
      expect(change_size(5)).toEqual({type: CHANGED_SIZE, size: 5})
    })
  })

  describe('color_action', () => {
    it('should provide the change_color action', () => {
      expect(change_color('#FFFFFF')).toEqual({type: CHANGED_COLOR, color: '#FFFFFF'})
    })
  })

  describe('selection_action', () => {
    it('should provide the change_selection action', () => {
      expect(change_selection(ESELECTION.NODE)).toEqual({type: CHANGED_SELECTION, selection: ESELECTION.NODE})
    })
    it('should provide the change_selection action', () => {
      expect(change_selection(ESELECTION.EDGE)).toEqual({type: CHANGED_SELECTION, selection: ESELECTION.EDGE})
    })
    it('should provide the change_selection action', () => {
      expect(change_selection(ESELECTION.BOTH)).toEqual({type: CHANGED_SELECTION, selection: ESELECTION.BOTH})
    })
  })
})
