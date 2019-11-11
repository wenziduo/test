// Action
import { CHANGE_ITEM, CHANGE_DATALIST } from './type'
export const changeItem = ({ payload }) => ({
  type: CHANGE_ITEM,
  payload
})
export const changeDataList = ({ payload }) => ({
  type: CHANGE_DATALIST,
  payload
})
