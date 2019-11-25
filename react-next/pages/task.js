import { withRouter } from 'next/router'
import React from 'react'
import { fetchTask } from '../api'
class TaskComponent extends React.Component {
  static async getInitialProps({ ctx }) {
    console.log('----------服务器端渲染-------------')
    const res = await fetchTask()
    console.log('res.data', res.data)
    return { ...res.data }
  }
  render() {
    return (
      <div>
        <span>{this.props && this.props.name}</span>
      </div>
    )
  }
}
export default withRouter(TaskComponent)
