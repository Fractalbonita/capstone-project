function cmp(a, b) {
  return (a > b ? -1 : a < b) * 1
}

function compare(fn) {
  return (a, b) => cmp(fn(a), fn(b))
}

function reverse(fn) {
  return (b, a) => fn(a, b)
}

export function ascending(fn) {
  return compare(fn)
}

export function descending(fn) {
  return reverse(compare(fn))
}
