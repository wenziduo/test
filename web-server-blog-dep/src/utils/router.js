import ClassifyCreate from '../pages/classify/create'
import PostCreate from '../pages/post/create'
import { Icon } from 'antd'
export const routerPath = [
  {
    title: '分类',
    path: '/classify',
    children: [
      {
        title: '新增类别',
        path: '/create',
        component: ClassifyCreate
      }
    ]
  },
  {
    title: '文章',
    path: '/post',
    children: [
      {
        title: '新增文章',
        path: '/create',
        component: PostCreate
      }
    ]
  }
]
