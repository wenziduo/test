import React from 'react'
// import MarkdownEditor from '@uiw/react-markdown-editor'
import MarkdownEditor from 'for-editor'
import { Button, message, Modal, Table } from 'antd'
import { columns } from './columns'
import ModalForm from './modal'
import { fetchClassify } from './service'
import './index.less'
// const FormItem = Form.Item

class Classify extends React.Component {
  state = {
    tableData: []
  }
  componentDidMount() {
    this.loadList()
  }
  loadList = async () => {
    const resClassify = await fetchClassify()
    this.setState({
      tableData: resClassify.data
    })
  }
  handleAdd = () => {
    this.modalFormNode.setData({
      type: 'add'
    })
  }
  handleEdit = record => {
    this.modalFormNode.setData({
      record,
      type: 'edit'
    })
  }
  render() {
    const { tableData } = this.state
    return (
      <div className="page page-postCreate">
        <ModalForm
          wrappedComponentRef={node => {
            this.modalFormNode = node
          }}
        />
        <div>
          <Button type="primary" onClick={this.handleAdd}>
            新增
          </Button>
        </div>
        <div style={{ marginTop: 15 }}>
          <Table
            dataSource={tableData}
            columns={columns.call(this)}
            size="default"
            rowKey="_id"
            pagination={false}
          />
        </div>
      </div>
    )
  }
}

export default Classify
