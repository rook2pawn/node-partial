var partial = require('../index.js');
var m3 = function(x,y,z) {
	return (x*y) + z;
};

var foo = partial(m3);
var baz = partial.rapply(m3);

// test that you have a function
exports.testfn = function(test) {
	test.expect(2);
	test.equal('function',typeof foo);
	test.equal('function',typeof baz);
	test.done();
};
// tests basic functionality of partial
exports.testpartial = function(test) {
	test.expect(3);
	test.equal(10,foo(2,3,4));
	test.equal(10,foo(2,3)(4)); 
	test.equal(foo(2,3,4),foo(2,3)(4)); 
	test.done();
}
// tests basic functionality of partial.rapply
exports.testpartialRight = function(test){
	test.expect(3);
	test.equal(10,baz(2,3,4));
	test.equal(10,baz(4)(2,3));
	test.equal(baz(2,3,4),baz(4)(2,3)); 
	test.done();
}
