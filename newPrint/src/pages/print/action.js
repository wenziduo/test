// 开始拖动
export const handleDragstart = e => {
  console.log(e.target.id)
  e.dataTransfer.setData('id', e.target.id)
  // e.preventDefault()
}
export const handleDragover = e => {
  e.preventDefault()
}
export const handleDragenter = e => {
  console.log(e.target)
  // e.preventDefault()
  e.target.classList.add('over')
}
export const handleDragleave = e => {
  e.preventDefault()
  e.target.classList.remove('over')
}
export const handleDrop = e => {
  e.preventDefault()
  e.target.classList.remove('over')
  const id = e.dataTransfer.getData('id')
  const itemEle = document.getElementById(id)
  e.toElement.appendChild(itemEle)
}
