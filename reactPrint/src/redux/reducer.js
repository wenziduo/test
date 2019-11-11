// Reducer   基于原有state根据action得到新的state
import { CHANGE_ITEM_ID } from './type'
const initState = {
  itemId: null
}
function print(state = initState, { type, payload }) {
  switch (type) {
    case CHANGE_ITEM_ID:
      return {
        ...state,
        itemId: payload
      }
    default:
      return state
  }
}

export default print
