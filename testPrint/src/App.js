import React from 'react'
import Router from './router'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

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
