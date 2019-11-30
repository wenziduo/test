import React from 'react'
import Link from 'next/link'
import { OverlayTrigger, Image, Tooltip } from 'react-bootstrap'
import './index.less'
class MyContainer extends React.Component {
  render() {
    return (
      <div className="layout-container">
        <div className="layout-container-left">{this.props.children}</div>
        <div className="layout-container-right">
          <div>
            <h4 className="layout-container-right-title">最新文章</h4>
            <ul className="layout-container-right-ul">
              <li>
                <div style={{ minWidth: 80 }}>
                  <Image
                    width={70}
                    height={70}
                    rounded
                    // roundedCircle
                    thumbnail
                    style={{ float: 'left' }}
                    alt="171x180"
                    src="https://www.qsboke.cn/content/templates/CoolColour/images/ArticleImg/5.jpg"
                  />
                </div>
                <div className="layout-container-right-ul-li-content">
                  <Link
                    passHref
                    href={{ pathname: '/home', query: { name: 'Zeit' } }}
                  >
                    <h4>css样式设置，问题疑答, css样式设置，问题疑答！！！</h4>
                  </Link>
                  <p>
                    <span>2019-03-05</span>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ minWidth: 80 }}>
                  <Image
                    width={70}
                    height={70}
                    rounded
                    // roundedCircle
                    thumbnail
                    style={{ float: 'left' }}
                    alt="171x180"
                    src="https://www.qsboke.cn/content/templates/CoolColour/images/ArticleImg/5.jpg"
                  />
                </div>
                <div className="layout-container-right-ul-li-content">
                  <Link
                    passHref
                    href={{ pathname: '/home', query: { name: 'Zeit' } }}
                  >
                    <h4>css样式设置，问题疑答, css样式设置，问题疑答！！！</h4>
                  </Link>
                  <p>
                    <span>2019-03-05</span>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ minWidth: 80 }}>
                  <Image
                    width={70}
                    height={70}
                    rounded
                    // roundedCircle
                    thumbnail
                    style={{ float: 'left' }}
                    alt="171x180"
                    src="https://www.qsboke.cn/content/templates/CoolColour/images/ArticleImg/5.jpg"
                  />
                </div>
                <div className="layout-container-right-ul-li-content">
                  <Link
                    passHref
                    href={{ pathname: '/home', query: { name: 'Zeit' } }}
                  >
                    <h4>css样式设置，问题疑答, css样式设置，问题疑答！！！</h4>
                  </Link>
                  <p>
                    <span>2019-03-05</span>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ minWidth: 80 }}>
                  <Image
                    width={70}
                    height={70}
                    rounded
                    // roundedCircle
                    thumbnail
                    style={{ float: 'left' }}
                    alt="171x180"
                    src="https://www.qsboke.cn/content/templates/CoolColour/images/ArticleImg/5.jpg"
                  />
                </div>
                <div className="layout-container-right-ul-li-content">
                  <Link
                    passHref
                    href={{ pathname: '/home', query: { name: 'Zeit' } }}
                  >
                    <h4>css样式设置，问题疑答, css样式设置，问题疑答！！！</h4>
                  </Link>
                  <p>
                    <span>2019-03-05</span>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ minWidth: 80 }}>
                  <Image
                    width={70}
                    height={70}
                    rounded
                    // roundedCircle
                    thumbnail
                    style={{ float: 'left' }}
                    alt="171x180"
                    src="https://www.qsboke.cn/content/templates/CoolColour/images/ArticleImg/5.jpg"
                  />
                </div>
                <div className="layout-container-right-ul-li-content">
                  <Link
                    passHref
                    href={{ pathname: '/home', query: { name: 'Zeit' } }}
                  >
                    <h4>css样式设置，问题疑答, css样式设置，问题疑答！！！</h4>
                  </Link>
                  <p>
                    <span>2019-03-05</span>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ minWidth: 80 }}>
                  <Image
                    width={70}
                    height={70}
                    rounded
                    // roundedCircle
                    thumbnail
                    style={{ float: 'left' }}
                    alt="171x180"
                    src="https://www.qsboke.cn/content/templates/CoolColour/images/ArticleImg/5.jpg"
                  />
                </div>
                <div className="layout-container-right-ul-li-content">
                  <Link
                    passHref
                    href={{ pathname: '/home', query: { name: 'Zeit' } }}
                  >
                    <h4>css样式设置，问题疑答, css样式设置，问题疑答！！！</h4>
                  </Link>
                  <p>
                    <span>2019-03-05</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="layout-container-right-title">分类</h4>
            <ul className="layout-container-right-ul">
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>
                    <OverlayTrigger
                      // key={placement}
                      placement={'top'}
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Tooltip on <strong>{'top'}</strong>.
                        </Tooltip>
                      }
                    >
                      {/* <Image
                        width={70}
                        height={70}
                        roundedCircle
                        thumbnail
                        alt="图片错误"
                        src="http://img.taopic.com/uploads/allimg/130622/240373-13062210230694.jpg"
                      /> */}
                      <div className="layout-container-right-ul-li-round">
                        <div className="layout-container-right-ul-li-round-img">
                          <span>JS基础</span>
                        </div>
                      </div>
                    </OverlayTrigger>
                  </a>
                </Link>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>
                    <Image
                      width={70}
                      height={70}
                      roundedCircle
                      thumbnail
                      alt="图片错误"
                      src="http://img.taopic.com/uploads/allimg/130622/240373-13062210230694.jpg"
                    />
                  </a>
                </Link>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>
                    <Image
                      width={70}
                      height={70}
                      roundedCircle
                      thumbnail
                      alt="图片错误"
                      src="http://img.taopic.com/uploads/allimg/130622/240373-13062210230694.jpg"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>here</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>here</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>here</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>here</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                  <a>here</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MyContainer
