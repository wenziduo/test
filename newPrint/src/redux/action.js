// Action
import {
  CHANGE_TABS_KEY,
  ADD_ITEM,
  CHANGE_ITEM,
  CHOOSE_OBJECT,
  CHOOSE_ELE
} from './type'
export const changeTabsKey = ({ payload }) => ({
  type: CHANGE_TABS_KEY,
  payload
})
export const addItem = ({ payload }) => ({
  type: ADD_ITEM,
  payload
})
export const changeItem = ({ payload }) => ({
  type: CHANGE_ITEM,
  payload
})
export const choose = ({ payload }) => ({
  type: CHOOSE_OBJECT,
  payload
})
export const chooseEle = ({ payload }) => ({
  type: CHOOSE_ELE,
  payload
})
