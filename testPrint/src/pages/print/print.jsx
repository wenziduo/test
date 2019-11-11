import React, { Component } from 'react'
import { changeItem } from './redux/action'
import { Row, Col } from 'antd'
import { gridData, souceData } from './const'
class PrintComponent extends Component {
  // 拖拽 start
  handleDrapStart = (record, e) => {
    // e.stopPropagation()
    // e.preventDefault()
    console.log('record', record)
    e.dataTransfer.setData('self', JSON.stringify(record))
  }
  // 拖拽 start
  handleDrapEnter = e => {
    e.stopPropagation()
    e.preventDefault()
  }
  // 拖拽 start
  handleDrapOver = e => {
    e.stopPropagation()
    e.preventDefault()
  }
  // 拖拽 start
  handleDragLeave = e => {
    e.stopPropagation()
    e.preventDefault()
  }
  // 拖拽 start
  handleDrop = (record, e) => {
    e.stopPropagation()
    e.preventDefault()
    const { printData } = this.props.printModel
    const selfObj = JSON.parse(e.dataTransfer.getData('self'))
    // console.log('selfObj', selfObj)
    // console.log('record', record)
    const newPrintData = [...printData]
    this.removeItem(selfObj, newPrintData)
    this.insetItem(selfObj, record, newPrintData, 'in')
    console.log('newPrintData', newPrintData)
    this.props.dispatch(changeItem({ payload: newPrintData }))
  }
  // removeItem
  removeItem = (self, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].uuid === self.uuid) {
        data.splice(i, 1)
        return
      } else {
        if (data[i].children) {
          this.removeItem(self, data[i].children)
        }
      }
    }
  }
  // insertItem
  insetItem = (self, target, data, type) => {
    console.log('6666666', self, data)
    for (let i = 0; i < data.length; i++) {
      if (data[i].uuid === target.uuid) {
        if (type === 'before') {
          data.splice(i, 0, self)
        }
        if (type === 'next') {
          data.splice(i + 1, 0, self)
        }
        if (type === 'in') {
          data[i].children.push(self)
        }
        return
      } else {
        if (data[i].children) {
          this.insetItem(self, target, data[i].children, type)
        }
      }
    }
  }
  render() {
    const { printData, dataList } = this.props.printModel
    console.log('printData', printData)
    const loop = item => {
      // console.log('item', item)
      if (item.type === 'grid') {
        return (
          <Row
            className="item-grid"
            key={item.uuid}
            gutter={24}
            draggable={true}
            onDragStart={this.handleDrapStart.bind(this, item)}
          >
            {item.children.map((item2, index2) => {
              return (
                <Col
                  key={index2}
                  span={item2.flex}
                  className="item-col"
                  onDragEnter={this.handleDrapEnter}
                  onDragOver={this.handleDrapOver}
                  onDragLeave={this.handleDragLeave}
                  onDrop={this.handleDrop.bind(this, item2)}
                >
                  {item2.children.map(item3 => {
                    if (dataList.find(item4 => item3 === item4.uuid)) {
                      loop(dataList.find(item4 => item3 === item4.uuid))
                    }
                  })}
                </Col>
              )
            })}
          </Row>
        )
      }
      if (item.type === 'text') {
        return (
          <div className="item-text" key={item.uuid}>
            <label>{item.value}</label>
          </div>
        )
      }
    }
    return (
      <div>
        {printData.map(item => {
          console.log(loop(item))
          return loop(item)
        })}
      </div>
    )
  }
}

export default PrintComponent
