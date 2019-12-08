import React from 'react'
import { Icon } from 'antd'
import { routerPath } from '../utils/router'

export const menuData = routerPath.map(item => {
  let fatherIcon
  switch (item.path) {
    case '/post/create':
      fatherIcon = <Icon type="user" />
      break
    default:
      fatherIcon = <Icon type="user" />
  }
  const childrenData = item.children.map(ele => ({
    ...ele,
    path: `${item.path}${ele.path}`
  }))
  return {
    ...item,
    Icon: fatherIcon,
    children: childrenData.map(item2 => {
      let ChildrenIcon
      switch (item.path) {
        case '/post/create':
          ChildrenIcon = <Icon type="user" />
          break
        default:
          ChildrenIcon = <Icon type="user" />
      }
      return {
        ...item2,
        Icon: ChildrenIcon
      }
    })
  }
})
export const routeData = routerPath.reduce((total, curr) => {
  curr.children.forEach(item => {
    item.path = `${curr.path}${item.path}`
  })
  return total.concat(curr.children)
}, [])
