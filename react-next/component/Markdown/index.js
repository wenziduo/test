import React from 'react'
// import MarkdownEditor from '@uiw/react-markdown-editor'
const MarkdownEditor = dynamic(import('@uiw/react-markdown-editor'), {
  ssr: false
})
// const MarkdownEditor = require('@uiw/react-markdown-editor')

class MarkDownComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: ''
    }
  }
  componentDidMount() {
    this.MarkdownEditor = require('@uiw/react-markdown-editor')
  }
  handleMarkDownChange = e => {
    console.log(e)
    this.setState({
      markdown: e.target.value
    })
  }
  updateMarkdown = (editor, data, value) => {
    this.setState({ markdown: value })
  }
  render() {
    const isServer = typeof window === 'undefined'
    const MarkdownEditor = this.MarkdownEditor
    return (
      <div>
        {!isServer && (
          <MarkdownEditor
            value={this.state.markdown}
            onChange={this.updateMarkdown}
          />
        )}
      </div>
    )
  }
}

export default MarkDownComponent
