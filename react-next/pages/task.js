import { withRouter } from 'next/router'
const Task = ({ router, fzr }) => (
  <span>
    {router.query.taskName} 任务负责人：{fzr}
  </span>
)
Task.getInitialProps = async () => {
  console.log('----------服务器端渲染-------------')
  await new Promise(resolve => {
    setTimeout(resolve, 5000)
  })
  return { fzr: 'chatwei' }
}
export default withRouter(Task)
