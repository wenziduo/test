import React from 'react'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import Main from '../../component/Main'
// import ReactMarkdown from 'react-markdown/with-html'
// import CodeBlock from '../../component/CodeBlock/index'
// import HeadingBlock from '../../component/HeadingBlock/index'
import MarkdownEditor from '@uiw/react-markdown-editor'
const FormControl = Form.Control

class Post extends React.Component {
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
    const { markdown } = this.state
    return (
      <div>
        {/* <FormControl
          as="textarea"
          style={{ width: 800 }}
          rows={8}
          value={markdown}
          onChange={this.handleMarkDownChange}
        /> */}
        <MarkdownEditor
          value={this.state.markdown}
          onChange={this.updateMarkdown}
        />
      </div>
    )
  }
}

export default Main(Post)
