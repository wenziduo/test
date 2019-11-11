import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app.js'
import './src/style.css'

console.log(`Looks like we are in ${process.env.NODE_ENV}!`)
ReactDOM.render(<App />, document.getElementById('root'))
