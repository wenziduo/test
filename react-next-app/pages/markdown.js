import React from 'react'
// import MarkdownEditor from '@uiw/react-markdown-editor'
const MarkdownEditor = require('@uiw/react-markdown-editor')

class MarkDownComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: ''
    }
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
    return (
      <div>
        <MarkdownEditor
          value={this.state.markdown}
          onChange={this.updateMarkdown}
        />
      </div>
    )
  }
}

export default MarkDownComponent
