import React from 'react'
import './index.css'
import { uuid } from '../../utils/index'

class TextItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'radio',
      fontSize: 14,
      id: uuid()
    }
  }
  render() {
    const { label, fontSize, id } = this.state
    return (
      <div style={{ fontSize }} className="radio-item" id={id}>
        <label>{label}</label>
      </div>
    )
  }
}

export default TextItem
