import React from 'react'
import { changeTabsKey, changeItem } from '../../redux/action'

class Print extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  setData = item => {
    const newData = new Array(this.state.data)
    newData.push(item)
    this.setState({
      data: newData
    })
  }
  // 选中
  handleChooseWidthItem = (item, e) => {
    e.stopPropagation()
    this.props.dispatch(changeTabsKey({ payload: item.id }))
  }
  // 选中
  // handleChooseWidthGrid = (item, e) => {
  //   // alert()
  //   e.stopPropagation()
  //   this.props.dispatch(changeTabsKey({ payload: item.id }))
  // }
  // 开始拖动
  handleDragstart = e => {
    const { printData } = this.props
    const itemObj = printData.find(item => item.id === e.target.id)
    e.dataTransfer.setData('itemObj', JSON.stringify(itemObj))
  }
  handleDragover = e => {
    e.preventDefault()
  }
  handleDragenter = e => {
    console.log(e.target)
    // e.preventDefault()
    e.target.classList.add('over')
  }
  handleDragleave = e => {
    e.preventDefault()
    e.target.classList.remove('over')
  }
  handleDrop = e => {
    e.preventDefault()
    e.target.classList.remove('over')
    const index = e.target.getAttribute('index')
    const parentid = e.target.getAttribute('parentid')
    console.log('index', index)
    console.log('parentid', parentid)
    const itemObj = JSON.parse(e.dataTransfer.getData('itemObj'))
    const { printData } = this.props
    const newPrintData = printData.map(item => {
      if (item.id === itemObj.id) {
        item.isRoot = false
      }
      if (item.id === parentid) {
        item.childrenList[index].push(itemObj.id)
      }
      return item
    })
    console.log('newPrintData', newPrintData)
    this.props.dispatch(changeItem({ payload: newPrintData }))
  }
  // 获取
  getEle = e => {
    console.log(e.target.children)
    const objList = [...e.target.children].map(item => {
      return {
        title: item.title,
        obj: item.obj
      }
    })
    console.log(objList)
  }
  render() {
    const { printData, tabsKey, chooseEle } = this.props
    console.log(chooseEle.id)
    console.log('printData', printData)
    return (
      <div className="print-box" id="print-box" onDoubleClick={this.getEle}>
        {printData
          .filter(item => item.isRoot)
          .map((item, index) => {
            if (item.type === 'text') {
              return (
                <div
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  draggable="true"
                  className={
                    chooseEle.id === item.id
                      ? 'item-box choose-item'
                      : 'item-box'
                  }
                  onDragStart={this.handleDragstart}
                >
                  <div style={{ fontSize: Number(item.fontSize) }}>
                    <label>{item.label}：</label>
                  </div>
                </div>
              )
            }
            if (item.type === 'grid') {
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={
                    chooseEle.id === item.id
                      ? 'grid-row choose-item'
                      : 'grid-row'
                  }
                  title={item.title}
                  style={
                    item.id === tabsKey ? { border: '1px solid green' } : null
                  }
                  onClick={this.handleChooseWidthGrid.bind(this, item)}
                >
                  {item.col.split('+').map((item2, index2) => (
                    <div
                      key={`${item.id} - ${index2}`}
                      index={index2}
                      parentid={item.id}
                      className="grid-col"
                      style={{ flex: item2 }}
                      draggable="true"
                      onDragOver={this.handleDragover}
                      onDragEnter={this.handleDragenter}
                      onDragLeave={this.handleDragleave}
                      onDrop={this.handleDrop}
                    >
                      {item.childrenList[index2].map(item3 => {
                        const obj = printData.find(item4 => item4.id === item3)
                        if (obj.type === 'text') {
                          return (
                            <div
                              key={obj.id}
                              id={obj.id}
                              draggable="true"
                              className="item-box"
                              onDragStart={this.handleDragstart}
                              // onClick={this.handleChooseWidthItem.bind(
                              //   this,
                              //   obj
                              // )}
                            >
                              <div style={{ fontSize: Number(obj.fontSize) }}>
                                <label>{obj.label}：</label>
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                  ))}
                </div>
              )
            }
          })}
      </div>
    )
  }
}

export default Print
