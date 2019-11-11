export const navObj = [
  {
    title: '文本',
    label: '默认文本',
    dataIndex: 'dataIndex',
    fontSize: 14,
    smallHeadPic: '',
    key: 0,
    type: 'text',
    isRoot: true,
    settingObj: [
      {
        title: '基础',
        key: 0,
        objList: [
          {
            title: '标题',
            parentKey: 0,
            key: 0,
            value: '默认文本',
            ele: 'input',
            toKeyName: 'label'
          },
          {
            title: '字段',
            parentKey: 0,
            key: 1,
            value: 'dataIndex',
            ele: 'input',
            toKeyName: 'dataIndex'
          }
        ]
      },
      {
        title: '风格',
        key: 1,
        objList: [
          {
            title: '字体大小',
            parentKey: 1,
            key: 0,
            value: 14,
            ele: 'input',
            toKeyName: 'fontSize'
          }
        ]
      }
    ]
  },
  {
    title: '栅格',
    smallHeadPic: '',
    key: 1,
    type: 'grid',
    row: 24,
    col: '24',
    isRoot: true,
    settingObj: [
      {
        title: '基础',
        key: 0,
        objList: [
          {
            parentKey: 0,
            key: 0,
            title: '风格',
            value: '24',
            ele: 'grid',
            toKeyName: 'col',
            values: [
              '24',
              '8+8+8',
              '8+16',
              '16+8',
              '6+6+6+6',
              '12+6+6',
              '6+12+6',
              '6+6+12'
            ]
          }
        ]
      }
    ],
    childrenList: [[]]
  }
]

// 16为随机数
export const uuid = () => {
  var result = ''
  for (var i = 0; i < 16; i++) {
    result += Math.floor(Math.random() * 16).toString(16) //获取0-15并通过toString转16进制
  }

  //默认字母小写，手动转大写
  return result.toUpperCase() //另toLowerCase()转小写
}

export const buildTree = list => {
  let temp = {}
  let tree = []
  for (let i in list) {
    temp[list[i].id] = list[i]
  }
  for (let i in temp) {
    if (temp[i].parentId) {
      if (!temp[temp[i].parentId].childrenList) {
        temp[temp[i].parentId].childrenList = new Array()
      }
      // temp[temp[i].parentId].childrenList[temp[i].id] = temp[i];
      temp[temp[i].parentId].childrenList.push(temp[i])
    } else {
      // tree[temp[i].id] =  temp[i];
      tree.push(temp[i])
    }
  }
  return tree
}
