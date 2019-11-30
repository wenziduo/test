import Main from '../../component/Main'
import MarkDown from '../../component/Markdown'
import { fetchPostDetail } from '../../api'

class Post extends React.Component {
  static async getInitialProps({ ctx: { pathname, query } }) {
    const _id = query.id
    console.log('query.id', query.id)
    const res = await fetchPostDetail({ _id })
    console.log('res', res)
    return {
      data: res.data
    }
  }
  render() {
    console.log('this.props.data', this.props.data)
    return (
      <Main>
        <MarkDown dataSouce={this.props.data} />
      </Main>
    )
  }
}

export default Post
