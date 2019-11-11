import React from 'react'
import { gridData } from './const'
import { changeItem, changeDataList } from './redux/action'
import { uuid } from './utils'

class Nav extends React.Component {
  handleAdd = record => {
    const { printData, dataList } = this.props.printModel
    const uuId = uuid()
    const newDataList = [
      ...dataList,
      {
        ...record,
        uuid: uuId
      }
    ]
    const newPrintData = [
      ...printData,
      {
        ...record,
        uuid: uuId,
        children: record.children.map(item => ({
          ...item,
          uuid: uuid()
        }))
      }
    ]
    this.props.dispatch(changeItem({ payload: newPrintData }))
    this.props.dispatch(changeDataList({ payload: newDataList }))
  }
  render() {
    return (
      <div style={{ borderBottom: '1px solid #CCC', padding: '5px 0' }}>
        {gridData.map(item => (
          <a
            key={item.key}
            style={{ marginLeft: 10, cursor: 'pointer', color: 'green' }}
            onClick={this.handleAdd.bind(this, item)}
          >
            {item.key}
          </a>
        ))}
      </div>
    )
  }
}

export default Nav
