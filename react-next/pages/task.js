import { withRouter } from 'next/router'
import React from 'react'
import axios from '../utils/axios'
class TaskComponent extends React.Component {
  static async getInitialProps() {
    console.log('----------服务器端渲染-------------')
    const res = await axios.get('http://127.0.0.1:8008/home')
    // const res = await fetch('/api/home')
    console.log('res', res)
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
