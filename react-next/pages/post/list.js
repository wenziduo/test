import React from 'react'
import moment from 'moment'
import Link from 'next/link'
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
                <Row>
                  <Col xs={3}>
                    <Link
                      href={{
                        pathname: '/post/detail',
                        query: { id: item._id }
                      }}
                    >
                      <Image
                        src={item.imgUrl}
                        thumbnail
                        width={200}
                        height={200}
                        style={{ cursor: 'pointer' }}
                      />
                    </Link>
                  </Col>
                  <Col xs={7}>
                    <h3>
                      <Link
                        href={{
                          pathname: '/post/detail',
                          query: { id: item._id }
                        }}
                      >
                        <span
                          style={{
                            color: '#09b597',
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </h3>
                    <p style={{ minHeight: 40, fontSize: 13 }}>
                      <Link
                        href={{
                          pathname: '/post/detail',
                          query: { id: item._id }
                        }}
                      >
                        <span style={{ cursor: 'pointer' }}>{item.text}</span>
                      </Link>
                    </p>
                    <p style={{ textAlign: 'right', color: '#777' }}>
                      <span>
                        {moment(item.createTime).format('YYYY-MM-DD HH:mm')}
                      </span>
                      <span style={{ marginLeft: 15 }}>
                        <i className="iconfont icon-eye" />
                        &nbsp;
                        {item.watch}
                      </span>
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
