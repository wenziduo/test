import Main from '../../component/Main'
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
          <h4 style={{ textAlign: 'center', fontSize: 12, color: '#666' }}>
            from：{postDetail.author}&nbsp;&nbsp;&nbsp; time：
            {moment(postDetail.createTime).format('YYYY-MM-DD HH:mm')}
          </h4>
        </div>
        <MarkDown dataSouce={postDetail.content} />
      </Main>
    )
  }
}

export default Post
