var a = 1

var obj = {
  b: 2
}

var fn = function () {}

fn.c = 3

function test(x, y, z) {
  x = 4;
  y.b = 5;
  z.c = 6;
  return z
}

test(a, obj, fn)

console.log(a , obj.b , fn.c, test(a, obj, fn))