import React from 'react'
import Demo from './demo'
// import MarkdownEditor from '@uiw/react-markdown-editor'
// const MarkdownEditor = require('@uiw/react-markdown-editor')

class MarkDownComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: '',
      isWindow: false
    }
  }
  async componentDidMount() {
    const res = await import('@uiw/react-markdown-editor')
    this.MarkdownEditor = res.default
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
    this.setState({ markdown: value })
  }
  render() {
    const MarkdownEditor = this.MarkdownEditor
    console.log(MarkdownEditor)
    return (
      <div>
        {this.state.isWindow && (
          <MarkdownEditor
            value={this.state.markdown}
            onChange={this.updateMarkdown}
          />
        )}
        <Demo />
      </div>
    )
  }
}

export default MarkDownComponent
