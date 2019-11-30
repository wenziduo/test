import React from 'react'
import { Modal, Form, Select, Button, notification, Input } from 'antd'
import { fetchClassify, fetchPostAdd } from './service'
const Option = Select.Option

class ModalComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      data: [],
      confirmLoading: false
    }
  }
  handleNext = async () => {
    if (!this.props.stateProps.markdown) {
      notification.warn({
        message: '温馨提示',
        description: '文章不能空'
      })
      return
    }
    this.setState({
      visible: true
    })
    const res = await fetchClassify()
    console.log(res)
    this.setState({ data: res.data })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
    this.props.form.resetFields()
  }
  handleSubmit = () => {
    this.props.form.validateFields(
      ['title', 'classifyId'],
      async (error, values) => {
        if (error) {
          return
        }
        this.setState({ confirmLoading: true })
        const res = await fetchPostAdd({
          ...values,
          content: this.props.stateProps.markdown
        })
        this.setState({ confirmLoading: false })
        if (res.success) {
          notification.success({
            message: '操作提示',
            description: '成功发布该文章！'
          })
          this.handleCancel()
        }
      }
    )
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { visible, data, confirmLoading } = this.state
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    console.log('stateProps', this.props.stateProps)
    return (
      <div style={{ textAlign: 'right', marginTop: 15 }}>
        <Button type="primary" onClick={this.handleNext}>
          下一步
        </Button>
        <Modal
          visible={visible}
          confirmLoading={confirmLoading}
          title="选择分类"
          onCancel={this.handleCancel}
          onOk={this.handleSubmit}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Item {...formItemLayout} label="文章标题">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '请填写文章标题!' }]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="文章类别">
              {getFieldDecorator('classifyId', {
                rules: [{ required: true, message: '请选择分类!' }]
              })(
                <Select style={{ width: 120 }}>
                  {data.map(item => (
                    <Option value={item._id} key={item._id}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(ModalComponent)
