export const souceData = [
  {
    key: '01',
    type: 'text',
    dataIndex: 'name',
    value: '病人姓名'
  },
  {
    key: '02',
    type: 'text',
    dataIndex: 'chuangwei',
    value: '床位'
  },
  {
    key: '03',
    type: 'text',
    dataIndex: 'ware',
    value: '病区'
  },
  {
    key: '04',
    type: 'text',
    dataIndex: 'number',
    value: '病案号'
  },
  {
    key: '05',
    type: 'text',
    dataIndex: 'supDate',
    value: '手术日期'
  },
  {
    key: '06',
    type: 'text',
    dataIndex: 'inDate',
    value: '入室时间'
  },
  {
    key: '07',
    type: 'text',
    dataIndex: 'outDate',
    value: '出室时间'
  },
  {
    key: '08',
    type: 'text',
    dataIndex: 'supName',
    value: '手术名称'
  },
  {
    key: '09',
    type: 'text',
    dataIndex: 'niaodao',
    value: '导尿'
  }
]

export const gridData = [
  {
    key: '01',
    type: 'grid',
    label: '24',
    value: '24',
    children: [{ data: [] }]
  },
  {
    key: '02',
    type: 'grid',
    label: '8+8+8',
    value: '8+8+8',
    children: [
      { data: [], flex: 8 },
      { data: [], flex: 8 },
      { data: [], flex: 8 }
    ]
  },
  {
    key: '03',
    type: 'grid',
    label: '8+16',
    value: '8+16',
    children: [{ data: [], flex: 8 }, { data: [], flex: 16 }]
  },
  {
    key: '04',
    type: 'grid',
    label: '16+8',
    value: '16+8',
    children: [{ data: [], flex: 16 }, { data: [], flex: 8 }]
  },
  {
    key: '05',
    type: 'grid',
    label: '6+6+6+6',
    value: '6+6+6+6',
    children: [
      { data: [], flex: 6 },
      { data: [], flex: 6 },
      { data: [], flex: 6 },
      { data: [], flex: 6 }
    ]
  },
  {
    key: '06',
    type: 'grid',
    label: '12+6+6',
    value: '12+6+6',
    children: [
      { data: [], flex: 12 },
      { data: [], flex: 6 },
      { data: [], flex: 6 }
    ]
  },
  {
    key: '07',
    type: 'grid',
    label: '6+12+6',
    value: '6+12+6',
    children: [
      { data: [], flex: 6 },
      { data: [], flex: 12 },
      { data: [], flex: 6 }
    ]
  },
  {
    key: '08',
    type: 'grid',
    label: '6+6+12',
    value: '6+6+12',
    children: [
      { data: [], flex: 6 },
      { data: [], flex: 6 },
      { data: [], flex: 12 }
    ]
  }
]
