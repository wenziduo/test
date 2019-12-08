import Main from '../../component/Main'
import Link from 'next/link'
import MarkDown from '../../component/Markdown'
import { Row, Col, Image } from 'react-bootstrap'
import { fetchPostDetail, fetchClassifyList, fetchPostList } from '../../api'
import { arrGroup } from '../../utils/utils'
import moment from 'moment'

class Post extends React.Component {
  static async getInitialProps({ ctx: { pathname, query } }) {
    const _id = query.id
    const resDetail = await fetchPostDetail({
      _id
    })
    return {
      postDetail: resDetail.data
    }
  }
  render() {
    const { postDetail } = this.props
    return (
      <Main>
        <div style={{ paddingTop: 20 }}>
          <h3 style={{ textAlign: 'center', fontSize: 16, fontWeight: 700 }}>
            {postDetail.title}
          </h3>
          <h4
            style={{
              fontSize: 12,
              color: '#666',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span>
              <i className="iconfont icon-user" />
              &nbsp;
              {postDetail.author}
            </span>
            <span style={{ marginLeft: 15 }}>
              <i className="iconfont icon-riqi2" />
              &nbsp;
              {moment(postDetail.createTime).format('YYYY-MM-DD HH:mm:ss')}
            </span>
            <span style={{ marginLeft: 15 }}>
              <i className="iconfont icon-eye" />
              &nbsp;
              {postDetail.watch}
            </span>
          </h4>
        </div>
        <MarkDown dataSouce={postDetail.content} />
        <div>
          {postDetail.prevData.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <span>上一篇：</span>
              <Link
                href={{
                  pathname: '/post/detail',
                  query: { id: postDetail.prevData[0]._id }
                }}
              >
                <span style={{ color: '#09b597', cursor: 'pointer' }}>
                  {postDetail.prevData[0].title}
                </span>
              </Link>
            </div>
          )}
        </div>
        <div style={{ marginTop: 20 }}>
          {postDetail.nextData.length > 0 && (
            <div>
              <span>下一篇：</span>
              <Link
                href={{
                  pathname: '/post/detail',
                  query: { id: postDetail.nextData[0]._id }
                }}
              >
                <span style={{ color: '#09b597', cursor: 'pointer' }}>
                  {postDetail.nextData[0].title}
                </span>
              </Link>
            </div>
          )}
        </div>
        {postDetail.guessData.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <h3 style={{ color: '#09b597', fontWeight: 700 }}>猜你喜欢</h3>
            <hr />
            <Row style={{ marginTop: 20, padding: '0 15px' }}>
              {postDetail.guessData.map(item => (
                <Col xs={3} key={item._id}>
                  <div style={{ flex: 1, display: 'flex' }}>
                    <Link
                      href={{
                        pathname: '/post/detail',
                        query: { id: item._id }
                      }}
                    >
                      <Image
                        src={item.imgUrl}
                        thumbnail
                        width={80}
                        height={80}
                        style={{ cursor: 'pointer', flexShrink: 0 }}
                      />
                    </Link>
                    <div style={{ flexShrink: 1, paddingLeft: 8 }}>
                      <div>
                        <Link
                          href={{
                            pathname: '/post/detail',
                            query: { id: item._id }
                          }}
                        >
                          <span
                            style={{
                              fontSize: 13,
                              color: '#09b597',
                              cursor: 'pointer',
                              lineHeight: '15px !import',
                              display: 'inline'
                            }}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: 10,
                            color: '#999',
                            // lineHeight: '15px',
                            display: 'inline'
                          }}
                        >
                          {(item.text || '').slice(0, 20)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Main>
    )
  }
}

export default Post
