import React from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor'
import { Button, message, Modal } from 'antd'
import ModalForm from './modal'
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
          // value={this.state.markdown}
          onChange={this.updateMarkdown}
          visble={true}
          height={700}
        />
        <ModalForm stateProps={this.state} />
      </div>
    )
  }
}

export default PostCreate
