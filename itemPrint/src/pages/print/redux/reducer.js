// Reducer   基于原有state根据action得到新的state
import { CHANGE_TABS_KEY, ADD_ITEM, CHANGE_ITEM, CHOOSE_OBJECT } from './type'
const initState = {
  tabsKey: 0,
  printData: [],
  chooseObject: []
}
function print(state = initState, { type, payload }) {
  switch (type) {
    case CHANGE_TABS_KEY:
      return {
        ...state,
        tabsKey: payload
      }
    case ADD_ITEM:
      const newData = new Array(...state.printData)
      newData.push(payload)
      return {
        ...state,
        printData: newData
      }
    case CHANGE_ITEM:
      return {
        ...state,
        printData: payload
      }
    case CHOOSE_OBJECT:
      return {
        ...state,
        chooseObject: payload
      }
    default:
      return state
  }
}

export default print
