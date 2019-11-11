import { uuid } from './utils'
import {
  handleDragstart,
  handleDragenter,
  handleDragleave,
  handleDragover,
  handleDrop
} from './action'
// type = text
export const createEleWithText = (item, handleClick) => {
  const ele = document.createElement('div')
  for (let i in item) {
    ele[i] = item[i]
  }
  ele.id = uuid()
  ele.onclick = handleClick.bind(this, ele)
  ele.className = 'item-box'
  ele.draggable = true
  ele.ondragstart = handleDragstart
  return ele
}

// type = grid
export const createEleWithGrid = (item, handleClick) => {
  const ele = document.createElement('div')
  const innerEle = document.createElement('div')
  for (let i in item) {
    ele[i] = item[i]
  }
  ele.id = uuid()
  ele.onclick = handleClick.bind(this, ele)
  ele.className = 'grid-row'
  // ele.innerText = item.title
  ele.style.fontSize = item.fontSize
  ele.draggable = true
  // innerEle
  innerEle.className = 'grid-col'
  innerEle.style.flex = item.col
  innerEle.ondragenter = handleDragenter
  innerEle.ondragover = handleDragover
  innerEle.ondragleave = handleDragleave
  innerEle.ondrop = handleDrop
  ele.ondragstart = handleDragstart
  ele.append(innerEle)
  return ele
}

// type = radio
export const createEleWithRadio = (item, handleClick) => {
  const ele = document.createElement('div')
  for (let i in item) {
    ele[i] = item[i]
  }
  ele.id = uuid()
  ele.onclick = handleClick
  ele.className = 'item-box'
  ele.innerText = item.title
  ele.style.fontSize = item.fontSize
  ele.draggable = true
  return ele
}

// flexIem
export const createEleWidthFlexItem = ({ flex }) => {
  const ele = document.createElement('div')
  ele.id = uuid()
  // ele.onclick = handleClick
  ele.className = 'grid-col'
  ele.style.flex = flex
  // ele.innerText = item.title
  // ele.draggable = true
  ele.ondragenter = handleDragenter
  ele.ondragover = handleDragover
  ele.ondragleave = handleDragleave
  ele.ondrop = handleDrop
  return ele
}
