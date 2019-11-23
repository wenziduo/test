import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './index.less'

class Header extends React.Component {
  // componentDidMount() {
  //   const { router } = this.props
  //   router.prefetch('/about')
  // }
  handleGo = record => {
    this.props.router.push(record.path)
  }
  render() {
    const { pathname } = this.props.router || {}
    console.log('pathname', pathname)
    return (
      <div className="layout-header">
        <div className="layout-header-main">
          <Navbar bg="light" expand="lg" role="navigation">
            <Navbar.Brand href="/home">逗儿瓢</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  href="/home"
                  className={pathname === '/home' ? 'layout-header-active' : ''}
                >
                  首页
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className={
                    pathname === '/about' ? 'layout-header-active' : ''
                  }
                >
                  关于
                </Nav.Link>
                <NavDropdown
                  title="分类"
                  id="basic-nav-dropdown"
                  className={
                    pathname === '/class' ? 'layout-header-active' : ''
                  }
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <div
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
        </div> */}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
