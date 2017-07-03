var slice = Array.prototype.slice

module.exports = partial
partial.rapply = rapply

function partial(fn) {
  var bound = slice.call(arguments, 1)
  return function () {
    var args = bound.concat(slice.call(arguments))
    if (args.length < fn.length) {
      args.unshift(fn)
      return partial.apply(this, args)
    } else {
      return fn.apply(this, args)
    }
  }
}

function rapply(fn) {
  var bound = slice.call(arguments, 1)
  return function () {
    var args = slice.call(arguments).concat(bound)
    if (args.length < fn.length) {
      args.unshift(fn)
      return rapply.apply(this, args)
    } else {
      return fn.apply(this, args)
    }
  }
}
