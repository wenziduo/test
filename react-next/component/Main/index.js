import React from 'react'
import Link from 'next/link'
import { OverlayTrigger, Image, Tooltip, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { fetchClassifyList, fetchPostList } from '../../api'
import { arrGroup } from '../../utils/utils'
import './index.less'
class MyContainer extends React.Component {
  state = {
    classifyData: [],
    newPosList: []
  }
  componentDidMount() {
    this.handleLoadClassify()
  }
  handleLoadClassify = async () => {
    const resClassifyList = await fetchClassifyList()
    const resPostList = await fetchPostList()
    this.setState({
      classifyData: arrGroup(resClassifyList.data || [], 3),
      newPosList: resPostList.data || []
    })
  }
  render() {
    const { classifyData, newPosList } = this.state
    return (
      <div className="layout-container">
        <div className="layout-container-left">{this.props.children}</div>
        <div className="layout-container-right">
          <div>
            <h4 className="layout-container-right-title">最新文章</h4>
            <ul className="layout-container-right-ul">
              {newPosList.map(item => (
                <li key={item._id}>
                  <div style={{ minWidth: 125 }}>
                    <Image
                      width={110}
                      height={110}
                      rounded
                      // roundedCircle
                      thumbnail
                      style={{ float: 'left' }}
                      alt="171x180"
                      src={item.imgUrl}
                    />
                  </div>
                  <div className="layout-container-right-ul-li-content">
                    <Link
                      passHref
                      href={{
                        pathname: '/post/detail',
                        query: { id: item._id }
                      }}
                    >
                      <h4>{item.title}</h4>
                    </Link>
                    <p style={{ textAlign: 'right' }}>
                      <span>
                        {moment(item.createTime).format('YYYY-MM-DD HH:mm')}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="layout-container-right-title">分类</h4>
            <ul className="layout-container-right-ul">
              {classifyData.map((item, index) => (
                <li key={index}>
                  <Row style={{ width: '100%', marginBottom: 5 }}>
                    {item.map((item2, index2) => (
                      <Col key={item2._id} sm={4}>
                        <div
                        // style={index2 === 1 ? { margin: '0px 25px' } : null}
                        >
                          <Link
                            href={{
                              pathname: '/post/list',
                              query: { classifyId: item2._id }
                            }}
                          >
                            <a>
                              <OverlayTrigger
                                placement={'top'}
                                overlay={<Tooltip>{item2.title}</Tooltip>}
                              >
                                <div className="layout-container-right-ul-li-round">
                                  <div
                                    className="layout-container-right-ul-li-round-img"
                                    style={{
                                      background: `url(${item2.imgUrl}) no-repeat center center`,
                                      backgroundSize: '80px 80px'
                                    }}
                                  >
                                    <span>{item2.title}</span>
                                  </div>
                                </div>
                              </OverlayTrigger>
                            </a>
                          </Link>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MyContainer
