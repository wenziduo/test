import React from 'react'
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
  componentDidMount() {
    import('@uiw/react-markdown-editor').then(res => {
      this.MarkdownEditor = res
      this.setState({
        isWindow: true
      })
    })
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
    const MarkdownEditor = this.MarkdownEditor
    console.log('MarkdownEditor', MarkdownEditor)
    return (
      <div>
        {this.isWindow && (
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
