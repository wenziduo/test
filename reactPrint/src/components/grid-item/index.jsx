import React from 'react'
import { connect } from 'react-redux'
import { uuid } from '../../utils/index'
import { changeItemId } from '../../redux/action'
import './index.css'

class TextItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'grid',
      fontSize: 14,
      id: uuid()
    }
  }
  componentDidMount() {
    this.props.dispatch(changeItemId({ payload: this.state.id }))
  }
  handleClick = () => {
    this.props.dispatch(changeItemId({ payload: this.state.id }))
  }
  render() {
    const { label, fontSize, id } = this.state
    const { itemId } = this.props
    return (
      <div
        style={{ fontSize }}
        className={itemId === id ? 'grid-item item-choose' : 'grid-item'}
        onClick={this.handleClick}
        id={id}
      >
        <label>{label}</label>
      </div>
    )
  }
}

export default connect(state => state)(TextItem)
