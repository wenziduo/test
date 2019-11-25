import React from 'react'
import Main from '../../component/Main'
import { Table, Input, Button } from 'antd'
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
// import MarkDown from '../../component/Markdown'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Array.apply(null, { length: 1000 }).map((item, index) => ({
        key: index,
        aaa: '',
        bbb: '',
        ccc: '',
        ddd: ''
      }))
    }
    this.columns = [
      {
        title: '测试1',
        dataIndex: 'aaa',
        render: (text, record) => <Input />
      },
      {
        title: '测试2',
        dataIndex: 'bbb',
        render: (text, record) => <Input />
      },
      {
        title: '测试3',
        dataIndex: 'ccc',
        render: (text, record) => <Input />
      },
      {
        title: '测试4',
        dataIndex: 'ddd',
        render: (text, record) => <Input />
      }
    ]
  }
  static async getInitialProps({ req }) {
    await new Promise(resolve => {
      setTimeout(resolve, 200)
    })
  }
  handleSave = () => {
    console.log(this.tableNode)
  }
  render() {
    const { data } = this.state
    return (
      <div>
        {/* <MarkDown /> */}
        <Button onClick={this.handleSave}>提交</Button>
        <Table
          dataSource={data}
          columns={this.columns}
          rowKey="key"
          pagination={false}
          ref={node => {
            this.tableNode = node
          }}
        />
      </div>
    )
  }
}

export default Main(Post)
