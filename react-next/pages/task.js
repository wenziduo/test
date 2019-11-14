import { withRouter } from 'next/router'
import React from 'react'
class TaskComponent extends React.Component {
  static async getInitialProps() {
    console.log('----------服务器端渲染-------------')
    await new Promise(resolve => {
      setTimeout(resolve, 3000)
    })
    return { fzr: 'chatwei' }
  }
  render() {
    return (
      <div>
        <span>
          {this.props.router && this.props.router.query.taskName} 任务负责人：
          {this.props && this.props.fzr}
        </span>
      </div>
    )
  }
}
export default withRouter(TaskComponent)
