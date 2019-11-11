import React from 'react'
import Router from './router'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
