import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
const headerNav = [
  {
    name: '首页',
    path: '/index'
  },
  {
    name: '任务',
    path: '/task'
  },
  {
    name: '关于',
    path: '/about'
  }
]
class Header extends React.Component {
  componentDidMount() {
    const { router } = this.props
    router.prefetch('/about')
  }
  handleGo = record => {
    this.props.router.push(record.path)
  }
  render() {
    const { pathname } = this.props.router || {}
    console.log('pathname', pathname)
    return (
      <div>
        <div style={pathname === '/about' ? { color: 'orangered' } : null}>
          你好
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 180,
            padding: '15px 0'
          }}
        >
          {headerNav.map(item => (
            <span
              key={item.path}
              onClick={this.handleGo.bind(this, item)}
              style={pathname === item.path ? { color: 'orangered' } : {}}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
