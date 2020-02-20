module.exports = function reverse (n) {
  n = n < 0 ? Math.abs(n) : n
  return +[...n.toString()].reverse().join('')
}
