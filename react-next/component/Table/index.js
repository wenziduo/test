import React from 'react'
// import Main from '../../component/Main'
import { Table, Input, Button } from 'antd'
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
// import MarkDown from '../../component/Markdown'

class TableComponent extends React.Component {
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
    this.cloneData = this.state.data
    this.columns = [
      {
        title: '测试1',
        dataIndex: 'aaa',
        render: (text, record) => (
          <Input onChange={this.handleInputChange.bind(this, record, 'aaa')} />
        )
      },
      {
        title: '测试2',
        dataIndex: 'bbb',
        render: (text, record) => (
          <Input onChange={this.handleInputChange.bind(this, record, 'bbb')} />
        )
      },
      {
        title: '测试3',
        dataIndex: 'ccc',
        render: (text, record) => (
          <Input onChange={this.handleInputChange.bind(this, record, 'ccc')} />
        )
      },
      {
        title: '测试4',
        dataIndex: 'ddd',
        render: (text, record) => (
          <Input onChange={this.handleInputChange.bind(this, record, 'ddd')} />
        )
      }
    ]
  }
  // static async getInitialProps({ req }) {
  //   await new Promise(resolve => {
  //     setTimeout(resolve, 200)
  //   })
  // }
  handleSave = () => {
    console.log(this.cloneData)
  }
  handleInputChange = (record, keyName, { target: { value } }) => {
    this.cloneData.forEach((item, index) => {
      if (item.key === record.key) {
        item[`${keyName}`] = value
      }
    })
  }
  render() {
    const { data } = this.state
    console.log('data', data)
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

export default TableComponent
