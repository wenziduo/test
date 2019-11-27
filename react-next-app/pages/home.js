import React, { Component } from 'react'
// import ReactMarkdown from 'react-markdown/with-html'
// import AppMarkdown from '../public/test.md'
// import CodeBlock from '../component/CodeBlock'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: '### 蔡雯多',
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
    const ReactMarkdown = this.ReactMarkdown
    const CodeBlock = this.CodeBlock
    const { markdown } = this.state
    console.log('markdown', markdown)
    return (
      <div>
        <div>
          {this.state.isWindow && (
            <MarkdownEditor
              value={this.state.markdown}
              onChange={this.updateMarkdown}
            />
          )}
        </div>
        <div>
          -------------------------------------------------------------------------------
        </div>
        <div>
          {this.state.isWindow && (
            <ReactMarkdown
              className="markdown-body"
              source={this.state.markdown}
              escapeHtml={false}
              renderers={{
                code: CodeBlock
              }}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Home
