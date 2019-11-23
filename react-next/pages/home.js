// import Router from 'next/router'
// export default () => {
//   function gotoTask() {
//     Router.push({ pathname: '/task', query: { taskName: '学习nextJS' } })
//   }
//   return <a onClick={gotoTask}>去任务页面</a>
// }
import React from 'react'
import Link from 'next/link'
import Main from '../component/Main'

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>我是首页模块页面</div>
        <Link href={{ pathname: '/task', query: { taskName: '学习nextJS' } }}>
          前往任务页面
        </Link>
      </div>
    )
  }
}

export default Main(Index)
