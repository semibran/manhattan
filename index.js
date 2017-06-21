var abs = Math.abs

module.exports = function manhattan(a, b) {
  return abs(b.x - a.x) + abs(b.y - a.y)
}
