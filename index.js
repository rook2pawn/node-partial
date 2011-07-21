var exports = module.exports = function() {
	var fn = arguments[0];	
	var args = [].concat.apply([],arguments).slice(1);
	return function() {
		if ((arguments.length + args.length) >= fn.length) {
			return fn.apply(fn, [].concat.apply(args,arguments));
		} else {	
			return exports(fn,[].concat.apply(args,arguments));
		}
	};
};
