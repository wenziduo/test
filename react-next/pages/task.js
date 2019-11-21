import { withRouter } from 'next/router'
import React from 'react'
import axios from '../utils/axios'
class TaskComponent extends React.Component {
  static async getInitialProps() {
    console.log('----------服务器端渲染-------------')
    // const res = await axios.get('/api/home')
    // console.log('res', res)
    const res = {}
    return { ...(res.data || { name: '任务' }) }
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
