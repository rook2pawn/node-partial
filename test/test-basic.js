var test = require('tape');
var partial = require('../')
var m3 = function(x,y,z) {
	return (x*y) + z;
};

var foo = partial(m3);
var baz = partial.rapply(m3);

// test that you have a function
test('test the partial is a function', function(t) {
	t.plan(2);
	t.equal('function',typeof foo);
	t.equal('function',typeof baz);
});
// tests basic functionality of partial
test('test basic functionality of partial', function(t) {
	t.plan(3);
	t.equal(foo(2,3,4),10);
	t.equal(foo(2,3)(4),10);
	t.equal(foo(2,3,4),foo(2,3)(4));
});

// tests basic functionality of partial.rapply
test('test basic functionality of partial right apply', function(t) {
	t.plan(3);
	t.equal(baz(2,3,4),10);
	t.equal(baz(4)(2,3),10);
	t.equal(baz(2,3,4),baz(4)(2,3));
})
