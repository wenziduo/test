import React from 'react'
import { navObj, uuid } from './utils'
import { changeTabsKey, addItem, chooseEle } from '../../redux/action'
import {
  createEleWithRadio,
  createEleWithGrid,
  createEleWithText
} from './consts'

class Nav extends React.Component {
  handAdd = item => {
    let ele
    if (item.type === 'text') {
      ele = createEleWithText(item, this.handleClick)
    }
    if (item.type === 'grid') {
      ele = createEleWithGrid(item, this.handleClick)
    }
    if (item.type === 'radio') {
      ele = createEleWithRadio(item, this.handleClick)
    }
    document.getElementById('print-box').append(ele)
  }
  // 选中
  handleClick = (ele, e) => {
    e.stopPropagation()
    const chooseItemEle = document.getElementsByClassName('choose-item')
    for (let i = 0; i < chooseItemEle.length; i++) {
      chooseItemEle[i].classList.remove('choose-item')
    }
    ele.classList.add('choose-item')
    this.props.dispatch(chooseEle({ payload: ele }))
  }
  render() {
    return (
      <div className="headNav">
        {navObj.map((item, index) => (
          <a
            key={index}
            onClick={this.handAdd.bind(this, JSON.parse(JSON.stringify(item)))}
          >
            {item.title}
          </a>
        ))}
      </div>
    )
  }
}

export default Nav
