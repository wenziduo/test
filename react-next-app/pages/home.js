import React, { Component } from 'react'
// import ReactMarkdown from 'react-markdown/with-html'
import AppMarkdown from '../public/test.md'
// import CodeBlock from '../component/CodeBlock'
// const ReactMarkdown = require('react-markdown')
// const htmlParser = require('react-markdown/plugins/html-parser')
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: AppMarkdown,
      isWindow: false
    }
  }
  async componentDidMount() {
    const res = await import('@uiw/react-markdown-editor')
    const res1 = await import('react-markdown/with-html')
    const res2 = await import('../component/CodeBlock')
    this.MarkdownEditor = res.default
    this.ReactMarkdown = res1.default
    this.CodeBlock = res2.default
    // fetch(AppMarkdown)
    //   .then(res => res.text())
    //   .then(text => this.setState({ markdown: text }))
    this.setState({
      isWindow: true
    })
  }
  handleMarkDownChange = e => {
    this.setState({
      markdown: e.target.value
    })
  }
  updateMarkdown = (editor, data, value) => {
    console.log('editor, data, value', editor, data, value)
    // this.setState({ markdown: value })
  }
  render() {
    const MarkdownEditor = this.MarkdownEditor
    const { markdown } = this.state
    console.log('markdown', markdown)
    return (
      <div>
        <div>
          {this.state.isWindow && (
            <MarkdownEditor
              value={this.state.markdown}
              onChange={this.updateMarkdown}
              visble={false}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Home
