import Router from 'next/router'
export default () => {
  function gotoTask() {
    Router.push({ pathname: '/task', query: { taskName: '学习nextJS' } })
  }
  return <a onClick={gotoTask}>去任务页面</a>
}
