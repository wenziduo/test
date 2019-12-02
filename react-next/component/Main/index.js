import React from 'react'
import Link from 'next/link'
import { OverlayTrigger, Image, Tooltip, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { fetchClassifyList } from '../../api'
import './index.less'
class MyContainer extends React.Component {
  state = {
    classifyData: []
  }
  // componentDidMount() {
  //   alert()
  //   this.handleLoadClassify()
  // }
  // handleLoadClassify = async () => {
  //   const res = await fetchClassifyList()
  //   console.log('resClassify', res)
  //   this.setState({ classifyData: arrGroup(res.data, 3) })
  // }
  render() {
    // const { classifyData } = this.state
    const { classifyData = [], newPosList = [] } = this.props
    return (
      <div className="layout-container">
        <div className="layout-container-left">{this.props.children}</div>
        <div className="layout-container-right">
          <div>
            <h4 className="layout-container-right-title">最新文章</h4>
            <ul className="layout-container-right-ul">
              {newPosList.map(item => (
                <li key={item._id}>
                  <div style={{ minWidth: 80 }}>
                    <Image
                      width={70}
                      height={70}
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
                      href={{ pathname: '/post', query: { id: item._id } }}
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
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                    // justifyContent: 'space-between'
                  }}
                  key={index}
                >
                  {item.map(item2 => (
                    <div key={item2._id} style={{ margin: '0px 5px' }}>
                      <Link
                        href={{ pathname: '/about', query: { name: 'Zeit' } }}
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
                                  backgroundSize: '65px 65px'
                                }}
                              >
                                <span>{item2.title}</span>
                              </div>
                            </div>
                          </OverlayTrigger>
                        </a>
                      </Link>
                    </div>
                  ))}
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
