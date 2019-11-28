import Main from '../../component/Main'
import MarkDown from '../../component/Markdown'

class Post extends React.Component {
  static async getInitialProps({ req }) {}
  render() {
    return (
      <div>
        <MarkDown />
      </div>
    )
  }
}

export default Main(Post)
