import React from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor'
import { Button, message, Modal } from 'antd'
import ModalComponent from './modal'
import './index.less'

class PostCreate extends React.Component {
  constructor() {
    super()
    this.state = {
      markdown: null
    }
    this.updateMarkdown = this.updateMarkdown.bind(this)
  }

  updateMarkdown(editor, data, value) {
    const { text } = data
    const textStr = text.join('\n')
    this.setState({ markdown: textStr })
  }
  render() {
    return (
      <div className="page page-postCreate">
        <MarkdownEditor
          value={this.state.markdown}
          onChange={this.updateMarkdown}
          visble={false}
          height={700}
        />
        <ModalComponent stateProps={this.state} />
      </div>
    )
  }
}

export default PostCreate
