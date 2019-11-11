import React from 'react'
import './index.css'
import { uuid } from '../../utils/index'
import { changeItemId } from '../../redux/action'

class TextItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'text',
      fontSize: 14,
      id: uuid(),
      changeNum: 0
    }
  }
  componentDidMount() {
    // this.props.dispatch(changeItemId({ payload: this.state.id }))
    window.sessionStorage.setItem('chooseId', this.state.id)
    this.setState({ changeNum: this.state.changeNum++ })
  }
  handleInputChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value
    })
  }
  handleClick = () => {
    // this.props.dispatch(changeItemId({ payload: this.state.id }))
    window.sessionStorage.setItem('chooseId', this.state.id)
    this.setState({ changeNum: this.state.changeNum++ })
  }
  render() {
    const { label, fontSize, id } = this.state
    const { itemId } = this.props
    const chooseId = window.sessionStorage.getItem('chooseId')
    console.log('id', id)
    console.log('chooseId', chooseId)
    return (
      <div>
        <div
          style={{ fontSize: `${fontSize}px` }}
          className={chooseId === id ? 'text-item item-choose' : 'text-item'}
          onClick={this.handleClick}
          id={id}
        >
          <label>{label}</label>
        </div>
        <div className="right-pos">
          <div>
            <h3>基础信息</h3>
            <div>
              <label>
                标题：
                <input
                  type="text"
                  value={label}
                  onChange={this.handleInputChange.bind(this, 'label')}
                />
              </label>
            </div>
          </div>
          <div>
            <h3>风格</h3>
            <div>
              <label>
                字体大小：
                <input
                  type="text"
                  value={fontSize}
                  onChange={this.handleInputChange.bind(this, 'fontSize')}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextItem
