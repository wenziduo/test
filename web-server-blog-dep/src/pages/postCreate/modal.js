import React from 'react'
import {
  Modal,
  Form,
  Select,
  Button,
  notification,
  Input,
  Upload,
  Icon
} from 'antd'
import { fetchClassify, fetchPostAdd, fetchGetQiniuToken } from './service'
import qiniuUpload from '../../utils/qiniuUpload'
import { urlBase } from '../../utils/qiniuUpload'
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
      ['title', 'classifyId', 'imgFile'],
      async (error, values) => {
        if (error) return
        const resToken = await fetchGetQiniuToken()
        const resQiniu = await qiniuUpload(values.imgFile.file, resToken.data)
        this.setState({ confirmLoading: true })
        const res = await fetchPostAdd({
          ...values,
          content: this.props.stateProps.markdown,
          text: this.props.stateProps.text,
          imgUrl: urlBase + resQiniu.key,
          imgFile: undefined
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
  handlecCustomRequest = async params => {
    return params
  }
  handleUploadChange = ({ file, fileList }) => {
    file.status = 'success'
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
    console.log('imgFile', this.props.form.getFieldValue('imgFile'))
    const fileList = this.props.form.getFieldValue('imgFile') || []
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
          width="500px"
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Item {...formItemLayout} label="文章标题">
              {getFieldDecorator('title', {
                initialValue: null,
                rules: [{ required: true, message: '请填写文章标题!' }]
              })(<Input style={{ width: 220 }} />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="文章类别">
              {getFieldDecorator('classifyId', {
                initialValue: null,
                rules: [{ required: true, message: '请选择分类!' }]
              })(
                <Select style={{ width: 220 }}>
                  {data.map(item => (
                    <Option value={item._id} key={item._id}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="标题图片">
              {getFieldDecorator('imgFile', {
                valuePropName: 'fileList',
                getValueFromEvent: e => {
                  if (Array.isArray(e)) {
                    return e
                  }
                  return e && e.fileList
                },
                initialValue: [],
                rules: [{ required: true, message: '请上传图片!' }]
              })(
                <Upload
                  accept="image/*"
                  listType="picture-card"
                  customRequest={this.handlecCustomRequest}
                  onPreview={e => {
                    console.log('e.thumbUrl', e.thumbUrl)
                    window.open(e.thumbUrl)
                  }}
                  onChange={this.handleUploadChange}
                >
                  {fileList.length === 0 && <span>+</span>}
                </Upload>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(ModalComponent)
