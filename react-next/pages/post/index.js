// import React from 'react'
import Main from '../../component/Main'
// import { Table, Input, Button } from 'antd'
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn'
// import 'antd/dist/antd.css'
import MarkDown from '../../component/Markdown'
import Table from '../../component/Table'

class Post extends React.Component {
  static async getInitialProps({ req }) {
    // await new Promise(resolve => {
    //   setTimeout(resolve, 200)
    // })
  }
  render() {
    // const { data } = this.state
    return (
      <div>
        <MarkDown />
        <Table />
      </div>
    )
  }
}

export default Main(Post)
