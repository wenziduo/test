import React from 'react'
import Link from 'next/link'
import Main from '../component/Main'

class Index extends React.Component {
  render() {
    return (
      <Main>
        <div>
          <div>我是首页模块页面</div>
          <Link
            href={{
              pathname: '/post/detail',
              query: { id: '5de266a045fffe3b4c69fdcf' }
            }}
          >
            前往任务页面
          </Link>
        </div>
      </Main>
    )
  }
}

export default Index
