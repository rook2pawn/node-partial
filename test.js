var partial = require('./index.js');
var m3 = function(x,y,z) {
	return (x*y) + z;
};

var foo = partial(m3);
console.log(foo(2,3,4)); // 10
console.log(foo(2,3)(4)); //10

var bar = foo(2,3);
console.log(bar(4)); // 10
