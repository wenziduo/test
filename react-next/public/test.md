<p align="center">
  <a href="https://github.com/uiwjs/react-markdown-editor/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/network">
    <img src="https://img.shields.io/github/forks/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/releases">
    <img src="https://img.shields.io/github/release/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-markdown-editor">
    <img src="https://img.shields.io/npm/v/@uiw/react-markdown-editor.svg">
  </a>
</p>

<p align="center">
  A markdown editor with preview, implemented with React.js and TypeScript.
</p>

## Install

```bash
npm i @uiw/react-markdown-editor
```

## Document

Official document [demo preview](https://uiwjs.github.io/react-markdown-editor/) ([🇨🇳 中国镜像网站](http://uiw.gitee.io/react-markdown-editor/))

## Basic Usage

```jsx
import MarkdownEditor from '@uiw/react-markdown-editor'
import React from 'react'
import ReactDOM from 'react-dom'

const Dome = () => (
  <MarkdownEditor value={this.state.markdown} onChange={this.updateMarkdown} />
)
```

controlled usage

```jsx
import MarkdownEditor from '@uiw/react-markdown-editor'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      markdown: '# This is a H1  \n## This is a H2  \n###### This is a H6'
    }
    this.updateMarkdown = this.updateMarkdown.bind(this)
  }

  updateMarkdown(editor, data, value) {
    this.setState({ markdown: value })
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.markdown}
        onChange={this.updateMarkdown}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

## Props

- value (_string_) - the raw markdown that will be converted to html (**required**)
- `visble?:boolean` - Shows a preview that will be converted to html.
- `toolbars?:array` - Tool display settings.
- `toolbarsMode?:array` - Tool display settings.
- onChange (_function(editor: IInstance, data: CodeMirror.EditorChange, value: string)_) - called when a change is made (**required**)

> [Other Props Options](https://github.com/uiwjs/react-markdown-editor/blob/8de6abbf628b6d272d7da1c28e985fbbcba71b93/src/components/CodeMirror/index.tsx#L21-L60)

### Development

```bash
npm run dev
npm run type-check:watch
npm run doc
```

## API

#### PreviewLayout

| 参数     | 说明                       | 类型 | 默认值 | 版本  |
| :------- | :------------------------- | :--: | :----: | :---: |
| children | 传递的组件，可以是任意组件 | jsx  |  null  | 0.1.0 |

#### MdPreviewer

| 参数 | 说明          |  类型  | 默认值 | 版本  |
| :--- | :------------ | :----: | :----: | :---: |
| md   | markdown 文档 | string |  null  | 0.1.0 |

#### CodePreviewer

| 参数     | 说明           |  类型  | 默认值 | 版本  |
| :------- | :------------- | :----: | :----: | :---: |
| code     | 要显示的代码   | string |  null  | 0.0.1 |
| showCode | 是否要展示代码 |  bool  |  true  | 0.1.0 |

## License

[MIT © Kenny Wong](./LICENSE)
