// const app = require('./_app')
// app.upLoad()
import App from './app'
const app = new App()
const one = (ctx, next) => {
  console.log('>> one')
  next()
  console.log('<< one')
}

const two = (ctx, next) => {
  console.log('>> two')
  next()
  console.log('<< two')
}

const three = (ctx, next) => {
  console.log('>> three')
  next()
  console.log('<< three')
}
// console.log(app.use)
app.use(one)
app.use(two)
app.use(three)
app.handleRequest('测试 666')
/*result
>> one
>> two
>> three
<< three
<< two
<< one
*/
