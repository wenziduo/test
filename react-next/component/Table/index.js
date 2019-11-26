import React from 'react'
// 原测试数据1000条
const data = Array.apply(null, { length: 1000 }).map((item, index) => ({
  key: index,
  ceshi2: 'aaa',
  ceshi3: 'bbb'
}))
class TableComponent extends React.Component {
  constructor(props) {
    super(props)
    // table表格每行的虚拟dom
    this.rowNode = []
    // 全选框的虚拟dom
    this.checkedAllNode
  }
  // 全选矿改变
  handleAllChecked = e => {
    this.rowNode.forEach(item => {
      item.children[0].children[0].checked = e.target.checked
    })
  }
  // 边表框改变
  handleChecked = e => {
    setTimeout(() => {
      // 判断所有的都选中的时候把全选框勾上否则全选框不勾
      const isAllChecked = this.rowNode.every(
        item => item.children[0].children[0].checked
      )
      if (isAllChecked) {
        this.checkedAllNode.checked = true
      } else {
        this.checkedAllNode.checked = false
      }
    }, 0)
  }
  // 提交
  handleSave = () => {
    // 提交的时候遍历虚拟dom树从中拿数据
    const dataNode = this.rowNode.filter(
      item => item.children[0].children[0].checked
    )
    const dataSouce = dataNode.map(item => ({
      ceshi2: item.children[1].children[0].value,
      ceshi3: item.children[2].children[0].value
    }))
    // 最终打印的结果
    console.log('dataSouce', dataSouce)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSave}>提交</button>
        <table style={{ width: 500, overflow: 'auto', display: 'block' }}>
          <thead>
            <tr>
              <th style={{ width: 200 }}>
                全选
                <input
                  type="checkbox"
                  onChange={this.handleAllChecked}
                  ref={node => {
                    this.checkedAllNode = node
                  }}
                />
              </th>
              <th style={{ width: 350 }}>测试2</th>
              <th style={{ width: 350 }}>测试3</th>
              <th style={{ width: 150 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr
                ref={node => {
                  this.rowNode.push(node)
                }}
                key={item.key}
              >
                <td>
                  <input type="checkbox" onChange={this.handleChecked} />
                </td>
                <td>
                  <input type="text" defaultValue={item.ceshi2} />
                </td>
                <td>
                  <input type="text" defaultValue={item.ceshi3} />
                </td>
                <td>操作</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableComponent
