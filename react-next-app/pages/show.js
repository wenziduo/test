import React from 'react'
const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')
import AppMarkdown from '../public/test.md'
import CodeBlock from '../component/CodeBlock'
import HeadingBlock from '../component/HeadingBlock'

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [
    /* ... */
  ]
})

class Show extends React.Component {
  render() {
    return (
      <div>
        <ReactMarkdown
          source={AppMarkdown}
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
            heading: HeadingBlock
          }}
        />
      </div>
    )
  }
}
export default Show
