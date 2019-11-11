import React from 'react'
import { souceData, gridData } from './const'
import { changeItem } from './redux/action'
import { uuid } from './utils'
class OperateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      souceList: souceData,
      gridList: gridData.map((item, index) =>
        index === 0 ? { ...item, checked: true } : { ...item }
      )
    }
  }
  handleGridChange = record => {
    this.setState({
      gridList: gridData.map(item =>
        item.key === record.key ? { ...item, checked: true } : { ...item }
      )
    })
  }
  handleAddGrid = () => {
    const { gridList } = this.state
    const item = gridList.find(item => item.checked)
    // item.uuid = uuid()
    const newItem = {
      ...item,
      uuid: uuid()
    }
    const { printData } = this.props.printModel
    const newData = Array.from(printData)
    newData.push(newItem)
    console.log('newData', newData)
    this.props.dispatch(changeItem({ payload: newData }))
  }
  handleDragStart = (record, e) => {
    const params = {
      ...record,
      uuid: uuid(),
      status: 0
    }
    // console.log('printData',  this.props.printModel.printData)
    e.dataTransfer.setData('self', JSON.stringify(params))
  }
  render() {
    const { souceList, gridList } = this.state
    return (
      <div>
        <h3>栅格</h3>
        <div>
          {gridList.map((item, index) => (
            <div key={item.key}>
              <label>
                <input
                  name="grid"
                  type="radio"
                  value={item.value}
                  defaultChecked={index === 0}
                  onChange={this.handleGridChange.bind(this, item)}
                />
                <span>{item.label}</span>
              </label>
            </div>
          ))}
          <button onClick={this.handleAddGrid}>添加</button>
        </div>
        <h3>数据源字段</h3>
        <ul>
          {souceList.map(item => (
            <li key={item.key}>
              <p
                draggable={true}
                onDragStart={this.handleDragStart.bind(this, item)}
              >
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default OperateComponent
