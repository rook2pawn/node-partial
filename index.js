const partial = function(fn, ...args) {
  return function (...newArgs) {
    if (args.length + newArgs.length >= fn.length) {
      return fn(...(args.concat(newArgs)))
    } else {
      return partial(fn, ...(args.concat(newArgs)))
    }
  }
}
partial.rapply = function(fn, ...args) {
  return function (...newArgs) {
    if (args.length + newArgs.length >= fn.length) {
      return fn(...(newArgs.concat(args)))
    } else {
      return partial.rapply(fn, ...(newArgs.concat(args)))
    }
  }
}
var exports = module.exports = partial;
