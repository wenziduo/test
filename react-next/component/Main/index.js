import React from 'react'
import './index.less'
const MyContainer = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <div className="layout-container">
          <div className="ayout-container-left">
            <WrappedComponent {...this.props} />
          </div>
          <div className="ayout-container-right">666</div>
        </div>
      )
    }
  }
}

export default MyContainer
