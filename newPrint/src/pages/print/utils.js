export const navObj = [
  {
    title: '文本',
    // label: '默认文本',
    dataIndex: 'dataIndex',
    fontSize: 14,
    innerText: '默认文本',
    type: 'text',
    settingObj: [
      {
        title: '基础',
        objList: [
          {
            title: '标题',
            ele: 'input',
            toKeyName: 'innerText'
          },
          {
            title: '字段',
            ele: 'input',
            toKeyName: 'dataIndex'
          }
        ]
      },
      {
        title: '风格',
        objList: [
          {
            title: '字体大小',
            ele: 'input',
            toKeyName: 'fontSize',
            type: 'style'
          }
        ]
      }
    ]
  },
  {
    title: '单选',
    label: '默认选择',
    dataIndex: 'radio',
    fontSize: 14,
    type: 'radio',
    settingObj: [
      {
        title: '基础',
        objList: [
          {
            title: '标题',
            ele: 'input',
            toKeyName: 'label'
          },
          {
            title: '字段',
            ele: 'input',
            toKeyName: 'dataIndex'
          }
        ]
      },
      {
        title: '风格',
        objList: [
          {
            title: '字体大小',
            ele: 'input',
            toKeyName: 'fontSize'
          }
        ]
      }
    ]
  },
  {
    title: '栅格',
    type: 'grid',
    row: 24,
    col: '24',
    isRoot: true,
    settingObj: [
      {
        title: '基础',
        objList: [
          {
            title: '风格',
            ele: 'grid',
            toKeyName: 'col',
            checkeds: [
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
