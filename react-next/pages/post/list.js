import React from 'react'
import moment from 'moment'
import Main from '../../component/Main'
import { ListGroup, Image, Row, Col } from 'react-bootstrap'
import { fetchPostList } from '../../api'

class PostList extends React.Component {
  static async getInitialProps({ ctx: { pathname, query } }) {
    const res = await fetchPostList({ classifyId: query.classifyId })
    return {
      dataList: res.data || []
    }
  }
  render() {
    const { dataList = [] } = this.props
    return (
      <div>
        <Main>
          <ListGroup variant="flush">
            {dataList.map(item => (
              <ListGroup.Item key={item._id}>
                <Row gutter={24}>
                  <Col xs={3}>
                    <Image
                      src={item.imgUrl}
                      thumbnail
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col xs={7}>
                    <h3>{item.title}</h3>
                    {/* <p>{item.content.slice(20)}</p> */}
                    <p>
                      <span>
                        {moment(item.createTime).format('YYYY-MM-DD HH:mm')}
                      </span>
                      <span>{item.watch}</span>
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Main>
      </div>
    )
  }
}

export default PostList
