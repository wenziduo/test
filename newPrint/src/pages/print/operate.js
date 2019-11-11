import React from 'react'
import { chooseEle as chooseEleAction } from '../../redux/action'
import { createEleWidthFlexItem } from './consts'

class Operate extends React.Component {
  handleInputChangeWithText = (item2, e) => {
    const { chooseEle } = this.props
    // 改变内层
    if (item2.type) {
      if (item2.toKeyName === 'fontSize') {
        chooseEle[item2.type][item2.toKeyName] = `${e.target.value}px`
      }
    }
    // 默认
    chooseEle[item2.toKeyName] = e.target.value
  }
  handleInputChangeWithGrid = (item2, e) => {
    const { chooseEle } = this.props
    const { length } = chooseEle.children
    const valArr = e.target.value.split('+')
    const chooseLength = valArr.length
    // console.log(length, chooseLength)
    // 默认
    chooseEle[item2.toKeyName] = e.target.value
    if (chooseLength > length) {
      valArr.map((eleVal, index) => {
        if (index < length) {
          chooseEle.children[index].style.flex = eleVal
        } else {
          chooseEle.append(createEleWidthFlexItem({ flex: eleVal }))
        }
      })
    } else {
      new Array(...chooseEle.children).filter((eleVal, index) => {
        if (index < chooseLength) {
          chooseEle.children[index].style.flex = valArr[index]
        } else {
          chooseEle.children[chooseLength].remove()
        }
      })
    }
  }
  render() {
    const { chooseEle } = this.props
    return (
      <div>
        {chooseEle.type === 'text' && (
          <div key={chooseEle.id}>
            {chooseEle.settingObj.map((item, index) => {
              return (
                <div key={index} style={{ marginTop: 20 }}>
                  <strong>{item.title}</strong>
                  {item.objList.map((item2, index2) => {
                    return (
                      <div key={index2} style={{ marginTop: 10 }}>
                        {
                          <div>
                            <label>{item2.title}：</label>
                            {item2.ele === 'input' && (
                              <input
                                type="text"
                                defaultValue={chooseEle[item2.toKeyName]}
                                onChange={this.handleInputChangeWithText.bind(
                                  this,
                                  item2
                                )}
                              />
                            )}
                          </div>
                        }
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
        {chooseEle.type === 'radio' && null}
        {chooseEle.type === 'grid' && (
          <div key={chooseEle.id}>
            {chooseEle.settingObj.map((item, index) => {
              return (
                <div key={index} style={{ marginTop: 20 }}>
                  <strong>{item.title}</strong>
                  {item.objList.map((item2, index2) => {
                    return (
                      <div key={index2} style={{ marginTop: 10 }}>
                        {
                          <div>
                            <label>{item2.title}：</label>
                            {item2.ele === 'grid' &&
                              item2.checkeds.map((item3, index3) => {
                                return (
                                  <div key={index3}>
                                    <label>
                                      <input
                                        type="radio"
                                        name="grid-radio"
                                        value={item3}
                                        defaultChecked={
                                          chooseEle[item2.toKeyName] === item3
                                        }
                                        onChange={this.handleInputChangeWithGrid.bind(
                                          this,
                                          item2
                                        )}
                                      />
                                      {item3}
                                    </label>
                                  </div>
                                )
                              })}
                          </div>
                        }
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Operate
