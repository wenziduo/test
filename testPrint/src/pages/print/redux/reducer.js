// Reducer   基于原有state根据action得到新的state
import { CHANGE_ITEM, CHANGE_DATALIST } from './type'
const initState = {
  printData: [],
  dataList: []
}
function print(state = initState, { type, payload }) {
  switch (type) {
    case CHANGE_ITEM:
      return {
        ...state,
        printData: payload
      }
    case CHANGE_DATALIST:
      return {
        ...state,
        dataList: payload
      }
    default:
      return state
  }
}

export default print
