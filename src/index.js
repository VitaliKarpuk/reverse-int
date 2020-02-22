module.exports = function reverse (n) {
    let a = n.toString().split('')
    if(n < 0){
        a.shift()
    }
  return  a.reverse().join('')
}
