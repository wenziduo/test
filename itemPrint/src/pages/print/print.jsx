import React, { Component } from 'react'
import { changeItem } from './redux/action'
class PrintComponent extends Component {
  getRemoveItem = record => {
    const { printData } = this.props.printModel
    console.log('printData', printData)
    const data = printData
      .filter(item => item.uuid !== record.uuid)
      .map(item => {
        const param1 = {
          ...item,
          children:
            item.type === 'grid'
              ? item.children.map(item2 => {
                  const param2 = {
                    ...item2,
                    data: item2.data.filter(item3 => item3.uuid !== record.uuid)
                  }
                  return param2
                })
              : undefined
        }
        return param1
      })
    return data
  }
  /**
   * col目标拖拽
   * @param {e} 拖拽源对象ele
   * @param {record} 拖拽源目标对象object
   */
  handleColDragenter = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.add('activeLayout')
  }
  handleColDragover = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  handleColDragleave = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('activeLayout')
  }
  handleColDrop = (record, index, e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('activeLayout')
    const self = JSON.parse(e.dataTransfer.getData('self'))
    if (self.type === 'grid') {
      return
    }
    if (self.status === undefined) {
      return
    }
    const { printData } = this.props.printModel
    let clonePrintData = [...printData]
    if (self.status === 1) {
      console.log('self', self)
      clonePrintData = this.getRemoveItem(self)
    }
    const data = Array.from(clonePrintData)
    const newData = data.map(ele => {
      const item = JSON.parse(JSON.stringify(ele))
      if (item.uuid === record.uuid) {
        item.children[index].data = [...item.children[index].data, self]
      }
      return {
        ...item
      }
    })
    this.props.dispatch(changeItem({ payload: newData }))
  }
  /**
   * item目标拖拽
   * @param {e} 拖拽源对象ele
   * @param {record} 拖拽源目标对象object
   */
  // item拖拽 handleItemDragStart
  handleItemDragStart = (record, e) => {
    e.stopPropagation()
    const params = {
      ...record,
      status: 1
    }
    e.dataTransfer.setData('self', JSON.stringify(params))
  }
  // item拖拽 handleItemDragEnter
  handleItemDragEnter = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  // item拖拽 handleItemDragOver
  handleItemDragOver = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('pageY', e.pageY)
    console.log('offsetParent', e.target.offsetParent.offsetTop)
    console.log('offsetTop', e.target.offsetTop)
    console.log('e.clientY', e.clientY)
    console.log('e.pageY', e.pageY)
    console.log('e.screenY', e.screenY)
    console.log('nodeName', e.target.offsetParent.nodeName)
    const number =
      e.target.offsetParent.nodeName === 'BODY'
        ? e.target.offsetTop
        : e.target.offsetParent.offsetTop
    const pageY = e.pageY - number
    const offsetHeight = e.target.offsetHeight
    if (pageY < offsetHeight / 2) {
      // console.log('red')
      e.target.classList.add('activeTop')
      e.target.classList.remove('activeBottom')
    } else {
      e.target.classList.add('activeBottom')
      e.target.classList.remove('activeTop')
    }
  }
  // item拖拽 handleItemDragLeave
  handleItemDragLeave = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('activeBottom')
    e.target.classList.remove('activeTop')
  }
  // item拖拽 handleItemDrop
  handleItemDrop = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
    const isHasTop = e.target.classList.contains('activeTop')
    const isHasBottom = e.target.classList.contains('activeBottom')
    e.target.classList.remove('activeTop')
    e.target.classList.remove('activeBottom')
    const self = JSON.parse(e.dataTransfer.getData('self'))
    if (self.type === 'grid') {
      return
    }
    if (self.uuid === record.uuid) {
      return
    }
    const { printData } = this.props.printModel
    const newPrintData =
      self.status === 1 ? [...this.getRemoveItem(self)] : printData
    let clonePrintData = [...newPrintData]
    if (isHasTop) {
      clonePrintData.forEach((item, index) => {
        if (item.uuid === record.uuid) {
          setTimeout(() => {
            clonePrintData.splice(index, 0, self)
          }, 0)
        }
        // 可能item存在于栅格中
        if (item.type === 'grid') {
          item.children.forEach((item2, index2) => {
            item2.data.forEach((item3, index3) => {
              if (item3.uuid === record.uuid) {
                setTimeout(() => {
                  clonePrintData[index].children[index2].data.splice(
                    index3,
                    0,
                    self
                  )
                }, 0)
              }
            })
          })
        }
      })
    }
    if (isHasBottom) {
      clonePrintData.forEach((item, index) => {
        if (item.uuid === record.uuid) {
          clonePrintData.splice(index + 1, 0, self)
          // clonePrintData = [...clonePrintData, self]
        }
        // 可能item存在于栅格中
        if (item.type === 'grid') {
          item.children.forEach((item2, index2) => {
            item2.data.forEach((item3, index3) => {
              if (item3.uuid === record.uuid) {
                setTimeout(() => {
                  clonePrintData[index].children[index2].data.splice(
                    index3 + 1,
                    0,
                    self
                  )
                }, 0)
              }
            })
          })
        }
      })
    }
    setTimeout(() => {
      this.props.dispatch(changeItem({ payload: clonePrintData }))
    }, 0)
  }
  /**
   * 拖拽至最外层目标
   * @param {e} 拖拽源对象ele
   * @param {record} 拖拽源目标对象object
   */
  // 最外层handleLayoutDragEnter
  handleLayoutDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.add('activeLayout')
  }
  // 最外层handleLayoutDragOver
  handleLayoutDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  // 最外层handleLayoutDragEnd
  handleLayoutDragleave = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('activeLayout')
  }
  // 最外层handleLayoutDrop
  handleLayoutDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('activeLayout')
    const self = JSON.parse(e.dataTransfer.getData('self'))
    const { printData } = this.props.printModel
    let clonePrintData = [...printData]
    if (self.status === 1) {
      console.log('self', self)
      clonePrintData = this.getRemoveItem(self)
    }
    const newData = [...clonePrintData, self]
    this.props.dispatch(changeItem({ payload: newData }))
  }
  /**
   * 栅格拖拽
   * @param {e} 拖拽源对象ele
   * @param {record} 拖拽源目标对象object
   */
  // grid 拖拽 handleGridDragStart
  handleGridDragStart = (record, e) => {
    // e.preventDefault()
    e.stopPropagation()
    const params = {
      ...record,
      status: 1
    }
    e.dataTransfer.setData('self', JSON.stringify(params))
  }
  // grid 拖拽 handleGridDragEnter
  handleGridDragEnter = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  // grid 拖拽 handleGridDragOver
  handleGridDragOver = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
    // console.log('e', e)
    // console.log('client', e.clientX, e.clientY)
    // console.log('screen', e.screenX, e.screenY)
    // console.log('page', e.pageX, e.pageY)
    // console.log('offsetTop', e.target, e.target.offsetTop)
    // console.log('topY', e.pageY - e.target.offsetTop)
    // console.log('topX', e.pageX - e.target.offsetLeft)
    // console.log('self', e.dataTransfer.getData('self'))
    const pageY = e.pageY - e.target.offsetTop
    const offsetHeight = e.target.offsetHeight
    // console.log('value', pageY, offsetHeight)
    if (pageY < offsetHeight / 2) {
      // console.log('red')
      e.target.classList.add('activeTop')
      e.target.classList.remove('activeBottom')
    } else {
      e.target.classList.add('activeBottom')
      e.target.classList.remove('activeTop')
    }
  }
  // grid 拖拽 handleGridDragLeave
  handleGridDragLeave = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.remove('activeTop')
    e.target.classList.remove('activeBottom')
  }
  // grid 拖拽 handleGridDrop
  handleGridDrop = (record, e) => {
    e.preventDefault()
    e.stopPropagation()
    const isHasTop = e.target.classList.contains('activeTop')
    const isHasBottom = e.target.classList.contains('activeBottom')
    e.target.classList.remove('activeTop')
    e.target.classList.remove('activeBottom')
    const self = JSON.parse(e.dataTransfer.getData('self'))
    if (self.uuid === record.uuid) {
      return
    }
    const { printData } = this.props.printModel
    const newPrintData =
      self.status === 1 ? this.getRemoveItem(self) : printData
    let clonePrintData = [...newPrintData]
    if (isHasTop) {
      clonePrintData.forEach((item, idnex) => {
        if (item.uuid === record.uuid) {
          setTimeout(() => {
            clonePrintData.splice(idnex, 0, self)
          }, 0)
        }
      })
    }
    if (isHasBottom) {
      clonePrintData.forEach((item, idnex) => {
        if (item.uuid === record.uuid) {
          clonePrintData.splice(idnex + 1, 0, self)
          // clonePrintData = [...clonePrintData, self]
        }
      })
    }
    setTimeout(() => {
      console.log('clonePrintData', clonePrintData)
      this.props.dispatch(changeItem({ payload: clonePrintData }))
    }, 0)
  }
  // 删除
  handleDel = (record, e) => {
    e.stopPropagation()
    console.log(record)
    this.props.dispatch(changeItem({ payload: this.getRemoveItem(record) }))
  }
  handleDoubleClick = () => {
    console.log('list', this.props.printModel.printData)
  }
  render() {
    const { printData } = this.props.printModel
    return (
      <div>
        <div
          className="print-box"
          onDrop={this.handleLayoutDrop}
          onDragEnter={this.handleLayoutDragEnter}
          onDragOver={this.handleLayoutDragOver}
          onDragLeave={this.handleLayoutDragleave}
          onDoubleClick={this.handleDoubleClick}
        >
          {printData.map((item, index) => {
            if (item.type === 'text') {
              return (
                <div
                  className="item"
                  key={index}
                  draggable={true}
                  onDragStart={this.handleItemDragStart.bind(this, item)}
                  onDragEnter={this.handleItemDragEnter.bind(this, item)}
                  onDragOver={this.handleItemDragOver.bind(this, item)}
                  onDragLeave={this.handleItemDragLeave.bind(this, item)}
                  onDrop={this.handleItemDrop.bind(this, item)}
                >
                  <div className="delBox">
                    <div
                      className="del"
                      onClick={this.handleDel.bind(this, item)}
                    >
                      X
                    </div>
                  </div>
                  <label>{item.value}：</label>
                </div>
              )
            }
            if (item.type === 'grid') {
              return (
                <div
                  className="grid-row"
                  key={index}
                  draggable={true}
                  onDragStart={this.handleGridDragStart.bind(this, item)}
                  onDragEnter={this.handleGridDragEnter.bind(this, item)}
                  onDragOver={this.handleGridDragOver.bind(this, item)}
                  onDragLeave={this.handleGridDragLeave.bind(this, item)}
                  onDrop={this.handleGridDrop.bind(this, item)}
                >
                  <div className="delBox">
                    <div
                      className="del"
                      onClick={this.handleDel.bind(this, item)}
                    >
                      X
                    </div>
                  </div>
                  {item.children.map((item2, index2) => (
                    <div
                      key={index2}
                      className="grid-col"
                      style={{
                        flex: item2.flex
                      }}
                      onDrop={this.handleColDrop.bind(this, item, index2)}
                      onDragOver={this.handleColDragover}
                      onDragEnter={this.handleColDragenter}
                      onDragLeave={this.handleColDragleave}
                      // onDrop={this.handleColDrop}
                    >
                      {item2.data.map((item3, index3) => (
                        // this.itemComponent.bind(this, item, item3, index3)
                        <div
                          className="item"
                          key={index3}
                          draggable={true}
                          onDragStart={this.handleItemDragStart.bind(
                            this,
                            item3
                          )}
                          onDragEnter={this.handleItemDragEnter.bind(
                            this,
                            item3
                          )}
                          onDragLeave={this.handleItemDragLeave.bind(
                            this,
                            item3
                          )}
                          onDragOver={this.handleItemDragOver.bind(this, item3)}
                          onDrop={this.handleItemDrop.bind(this, item3)}
                        >
                          <div className="delBox">
                            <div
                              className="del"
                              onClick={this.handleDel.bind(this, item3)}
                            >
                              X
                            </div>
                          </div>
                          <label>{item3.value}：</label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default PrintComponent
