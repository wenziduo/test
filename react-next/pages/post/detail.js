import Main from '../../component/Main'
import Link from 'next/link'
import MarkDown from '../../component/Markdown'
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
            <div>
              <span>上一篇：</span>
              <Link
                href={{
                  pathname: '/post/detail',
                  query: { id: postDetail.prevData[0]._id }
                }}
              >
                {postDetail.prevData[0].title}
              </Link>
            </div>
          )}
        </div>
        <div>
          {postDetail.nextData.length > 0 && (
            <div>
              <span>下一篇：</span>
              <Link
                href={{
                  pathname: '/post/detail',
                  query: { id: postDetail.nextData[0]._id }
                }}
              >
                {postDetail.nextData[0].title}
              </Link>
            </div>
          )}
        </div>
      </Main>
    )
  }
}

export default Post
