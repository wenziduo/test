import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PostCreate from '../pages/postCreate'
import { routerPath } from '../utils/router'
import { Preview } from '../component'
const { Header, Sider, Content } = Layout

class LayoutComponent extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleGoPath = record => {
    this.props.history.push({ pathname: record.path })
  }

  render() {
    const { pathname } = this.props.history.location
    return (
      <div>
        <Preview
          ref={node => {
            this.previewNode = node
          }}
        />
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
              {routerPath.map(item => (
                <Menu.Item
                  key={item.path}
                  onClick={this.handleGoPath.bind(this, item)}
                >
                  <Icon type="user" />
                  <span>{item.title}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
                overflowY: 'auto'
              }}
            >
              <Switch>
                <Route path="/postCreate" component={PostCreate} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default withRouter(LayoutComponent)
