import React from 'react'
import { souceData } from './const'

class Souce extends React.Component {
  render() {
    return (
      <div>
        <h3>源数据</h3>
        <ul>
          {souceData.map(item => (
            <li key={item.dataIndex}>{item.value}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Souce
