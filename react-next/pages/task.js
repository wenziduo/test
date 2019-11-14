import { withRouter } from "next/router";
import React from "react";
class TaskComponent extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <span>
          {this.props.router && this.props.router.query.taskName} 任务负责人：
          {this.props && this.props.fzr}
        </span>
      </div>
    );
  }
}
TaskComponent.getInitialProps = async () => {
  console.log("----------服务器端渲染-------------");
  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });
  return { fzr: "chatwei" };
};
export default withRouter(TaskComponent);
