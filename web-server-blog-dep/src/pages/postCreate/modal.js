import React from 'react'
import { Modal, Form, Select, Button, message } from 'antd'
const { Option } = Select.Option

class ModalComponent extends React.Component {
  handleNext = () => {
    if (!this.props.sateProps.markdown) {
      message.info('This is a normal message')
      return
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
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
    console.log('sateProps', this.props.sateProps)
    return (
      <div style={{ textAlign: 'right', marginTop: 15 }}>
        <Button type="primary" onClick={this.handleNext}>
          下一步
        </Button>
        <Modal>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item {...formItemLayout}>
              {getFieldDecorator('classifyId', {
                rules: [{ required: true, message: '请选择分类!' }]
              })(
                <Select defaultValue="1" style={{ width: 120 }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create(ModalComponent)
