import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CodeBlock extends PureComponent {
  state = {
    isWindow: false
  }
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  }

  static defaultProps = {
    language: null
  }

  componentDidMount() {
    this.loadComponent()
  }
  loadComponent = async () => {
    const SyntaxHighlighter = await import('react-syntax-highlighter')
    // 设置高亮样式
    const prism = await import('react-syntax-highlighter/dist/esm/styles/prism')
    const hljs = await import('react-syntax-highlighter/dist/esm/styles/hljs')
    // 设置高亮的语言
    const { jsx, javascript } = await import(
      'react-syntax-highlighter/dist/esm/languages/prism'
    )
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    const { PrismLight } = SyntaxHighlighter
    PrismLight.registerLanguage('jsx', jsx)
    PrismLight.registerLanguage('javascript', javascript)
    this.SyntaxHighlighter = PrismLight
    console.log('prism.coy', prism.coy)
    this.coy = prism.coy
    this.docco = hljs.docco
    this.setState({ isWindow: true })
  }
  render() {
    const { language, value } = this.props
    const { SyntaxHighlighter, coy, docco } = this
    const { isWindow } = this.state
    return (
      <div>
        {isWindow && (
          <figure className="highlight">
            <SyntaxHighlighter language={language} style={{ ...coy, ...docco }}>
              {value}
            </SyntaxHighlighter>
          </figure>
        )}
      </div>
    )
  }
}

export default CodeBlock
