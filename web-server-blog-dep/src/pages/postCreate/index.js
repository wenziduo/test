import React from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor'
import './index.less'

class PostCreate extends React.Component {
  state = {
    markdown: ''
  }
  updateMarkdown = (editor, data, value) => {
    console.log('editor, data, value', editor, data, value)
    // this.setState({ markdown: value })
  }
  render() {
    return (
      <div className="page page-postCreate">
        <MarkdownEditor
          value={this.state.markdown}
          onChange={this.updateMarkdown}
          visble={false}
        />
      </div>
    )
  }
}

export default PostCreate
