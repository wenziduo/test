import React from 'react'
import { connect } from 'react-redux'
import Operate from './operate'
import Source from './source'
import Print from './print'
import Nav from './nav'
import './index.css'

class Index extends React.Component {
  render() {
    return (
      <div className="page page-print">
        <div className="leftBox">
          <Source {...this.props} />
        </div>
        <div className="centerBox">
          <Nav {...this.props} />
          <Print {...this.props} />
        </div>
        <div className="rightBox">
          <Operate {...this.props} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ printModel: state.PrintReducer }))(Index)
