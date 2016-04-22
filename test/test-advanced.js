var test = require('tape');
var partial = require('../')
var m3 = function(x,y,z) {
	return ((x+1)*y) + z;
};

var foo = partial(m3);
var baz = partial.rapply(m3);

// test that you have a function
test('test partial returns a function', function(t) {
	t.plan(2);
	t.equal('function',typeof foo);
	t.equal('function',typeof baz);
});
// test for noncommutative expectation in partial
test.only('test for noncommutative expectation in partial',function(t) {
	t.plan(2);
	t.equal(foo(7,3,4),28);
  var x = foo(7,3);
  var y = x(4);
  console.log(x,y)
	t.equal(foo(7,3)(4),28); 
//	t.equal(foo(2,3,4),foo(2,3)(4)); 
})
/*
// tests for noncommutative expectation in partial.rapply
exports.testpartialRight = function(test){
	test.expect(3);
	test.equal(28,baz(7,3,4));
	test.equal(28,baz(4)(7,3));
	test.equal(baz(7,3,4),baz(4)(7,3)); 
	test.done();
}
*/
