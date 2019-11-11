var a = 5
this.b = 6
// function FunA() {
//   this.name = '蔡雯多'
//   this.age = 13
//   this.action = function() {
//     console.log(this)
//   }
// }

// new FunA().action()
console.log(this)
function funA() {
  this.name = '蔡雯多'
  this.age = 13
  console.log(this)
}

funA()
