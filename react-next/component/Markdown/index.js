import React from 'react'
import AppMarkdown from '../../public/test.md'
import CodeBlock from '../CodeBlock'
import HeadingBlock from '../HeadingBlock'
import './index.less'
// import Aaa from 'react-markdown'
// console.log('Aaa', Aaa)
// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
// const parseHtml = htmlParser({
//   isValidNode: node => node.type !== 'script',
//   processingInstructions: [
//     /* ... */
//   ]
// })

class MarkdownComponent extends React.Component {
  state = {
    isWindow: false
  }
  componentDidMount() {
    this.loadComponent()
  }
  loadComponent = async () => {
    const ReactMarkdown = await import('react-markdown')
    const htmlParser = await import('react-markdown/plugins/html-parser')
    this.ReactMarkdown = ReactMarkdown.default
    this.htmlParser = htmlParser.default
    this.setState({ isWindow: true })
  }
  render() {
    const { isWindow } = this.state
    console.log('isWindow', isWindow)
    const { ReactMarkdown, htmlParser } = this
    console.log('ReactMarkdown', ReactMarkdown)
    return (
      <div className="markdown-layout-outer">
        {isWindow && (
          <ReactMarkdown
            className="md-editor-markdown"
            source={this.props.dataSouce || null}
            // source={AppMarkdown}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: HeadingBlock
            }}
          />
        )}
      </div>
    )
  }
}
export default MarkdownComponent
