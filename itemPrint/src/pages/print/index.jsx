import React from 'react'
import { connect } from 'react-redux'
import Operate from './operate'
import Print from './print'
import './index.css'

class Index extends React.Component {
  render() {
    return (
      <div
        className="page page-print"
        ref={node => {
          this.boxNode = node
        }}
      >
        <div className="leftBox">
          <Print
            {...this.props}
            ref={node => {
              this.printNode = node
            }}
            navNode={this.navNode}
            operateNode={this.operateNode}
          />
        </div>
        <div className="rightBox">
          <Operate
            {...this.props}
            ref={node => {
              this.operateNode = node
            }}
            navNode={this.navNode}
            printNode={this.printNode}
          />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ printModel: state.PrintReducer }))(Index)
