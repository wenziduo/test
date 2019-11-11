const data = [
  {
    title: 'a',
    id: 1,
    parentId: 0
  },
  {
    title: 'b',
    id: 2,
    parentId: 1
  },
  {
    title: 'c',
    id: 3,
    parentId: 2
  },
  {
    title: 'd',
    id: 4,
    parentId: 2
  },
  {
    title: 'e',
    id: 5,
    parentId: 1
  }
]
function buildTree(list) {
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

console.log(buildTree(data))
