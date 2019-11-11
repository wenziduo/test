var a = true
var timer

function test01() {
  if (a) {
    timer = setTimeout(() => {
      a = true
      console.log(1)
    }, 3000)
  }
  a = false
}

setInterval(() => {
  console.log(a)
  test01()
}, 200)