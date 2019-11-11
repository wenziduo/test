import React from 'react'
console.log(`Looks like we are in ${process.env.NODE_ENV}!`)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>欢迎来打react webpack学习</h1>
      </div>
    )
  }
}

export default App
