import { withRouter } from 'next/router'
import React from 'react'
class TaskComponent extends React.Component {
  render() {
    return (
      <div>
        <span>task</span>
      </div>
    )
  }
}
export default withRouter(TaskComponent)
