function start() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 1)
  })
}
function a(num) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, num + 1)
  })
}
function b(num) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, num + 1)
  })
}
function c(num) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, num + 1)
  })
}
function d(num) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, num + 1)
  })
}
var startFu = start()
  .then(a)
  .then(b)
  .then(c)
  .then(d)
  .then(res => console.log(res))
  .catch(error => console.log(error))
setTimeout(() => {
  console.log(startFu)
}, 6)
setTimeout(() => {
  console.log(startFu)
}, 5500)

config = {
  _id : "replset",
  members : [
  {_id : 0, host : "192.168.73.29:27017"},
  {_id : 1, host : "192.168.73.29:27018"},
  {_id : 2, host : "192.168.73.29:27019"},
 {
         "_id" : "replset",
         "members" : [
                 {
                         "_id" : 0,
                         "host" : "192.168.73.29:27017"
                 },
                 {
                         "_id" : 1,
                         "host" : "192.168.73.29:27018"
                 },
                 {
                         "_id" : 2,
                         "host" : "192.168.73.29:27019"
                 }
         ]
 }
}