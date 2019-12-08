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
import qiniuUpload from '../../../utils/qiniuUpload'
import { urlBase } from '../../../utils/qiniuUpload'
const Option = Select.Option

const initState = {
  visible: false,
  record: {},
  confirmLoading: false,
  type: ''
}
class ModalComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = initState
  }
  setData = data => {
    this.setState({
      ...data
    })
  }
  handleCancel = () => {
    this.setState({
      ...initState
    })
    this.props.form.resetFields()
  }
  handleSubmit = () => {
    this.props.form.validateFields(
      ['title', 'imgFile'],
      async (error, values) => {
        if (error) return
        console.log('values', values)
        const resToken = await fetchGetQiniuToken()
        const resQiniu = await qiniuUpload(
          values.imgFile[0].originFileObj,
          resToken.data
        )
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
    const { visible, record, confirmLoading, type } = this.state
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
    // console.log('imgFile', this.props.form.getFieldValue('imgFile'))
    const fileList = this.props.form.getFieldValue('imgFile') || []
    return (
      <Modal
        visible={visible}
        confirmLoading={confirmLoading}
        title={type === 'add' ? '新增分类' : '编辑分类'}
        onCancel={this.handleCancel}
        onOk={this.handleSubmit}
        width="500px"
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="类别名称">
            {getFieldDecorator('title', {
              initialValue: record.title,
              rules: [{ required: true, message: '请填写类别名称!' }]
            })(<Input style={{ width: 220 }} />)}
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
    )
  }
}

export default Form.create()(ModalComponent)
