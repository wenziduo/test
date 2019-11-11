import React from 'react'
import { GridItem, RadioItem, TextItem } from '../../components'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.navList = [
      {
        type: 'text',
        label: '文本',
        ItemEle: <TextItem />
      },
      {
        type: 'radio',
        label: '单选',
        ItemEle: <RadioItem />
      },
      {
        type: 'grid',
        label: '栅格',
        ItemEle: <GridItem />
      }
    ]
  }
  handAdd = item => {
    const JSXdom = document.createElement('div')
    const PrintDom = document.getElementById('print-box')
    // if (item.type === 'text') {
    //   console.log(TextItem)
    //   ReactDOM.render(<TextItem {...this.props} />, JSXdom)
    // }
    // if (item.type === 'radio') {
    //   ReactDOM.render(<RadioItem />, JSXdom)
    // }
    // if (item.type === 'grid') {
    //   console.log(this.props.children)
    //   ReactDOM.render(<GridItem />, JSXdom)
    // }
    const { ItemEle } = item
    ReactDOM.render(ItemEle, JSXdom)
    PrintDom.append(JSXdom)
  }
  render() {
    return (
      <div className="headNav">
        {this.navList.map((item, index) => {
          if (item.type === 'text') {
            item.ItemEle = <TextItem {...this.props} />
          }
          if (item.type === 'radio') {
            item.ItemEle = <RadioItem {...this.props} />
          }
          if (item.type === 'grid') {
            item.ItemEle = <GridItem {...this.props} />
          }
          return (
            <a key={index} onClick={this.handAdd.bind(this, item)}>
              {item.label}
            </a>
          )
        })}
      </div>
    )
  }
}

export default connect(state => state)(Nav)
