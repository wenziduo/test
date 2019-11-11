/**
 * @name Router
 * @desc 页面路由配置
 */

import React, { Component } from 'react'
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'
import Print from '../pages/print'

class RouterComponent extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect path="/" to="/print" exact />
          <Route path="/print" component={Print} />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouterComponent
