import Main from '../../component/Main'
import MarkDown from '../../component/Markdown'
import { fetchPostDetail, fetchClassifyList, fetchPostList } from '../../api'
import { arrGroup } from '../../utils/utils'

class Post extends React.Component {
  static async getInitialProps({ ctx: { pathname, query } }) {
    const _id = query.id
    const resDetail = await fetchPostDetail({
      _id
    })
    const resPosList = await fetchPostList()
    const resClassifyData = await fetchClassifyList()
    return {
      postDetail: resDetail.data,
      postList: resPosList.data,
      classifyList: arrGroup(resClassifyData.data, 3)
    }
  }
  render() {
    const { classifyList, postList, postDetail } = this.props
    console.log('postDetail', postDetail)
    return (
      <Main classifyData={classifyList} newPosList={postList}>
        <h3>{postDetail.classifyData.title}</h3>
        <MarkDown dataSouce={postDetail.content} />
      </Main>
    )
  }
}

export default Post
