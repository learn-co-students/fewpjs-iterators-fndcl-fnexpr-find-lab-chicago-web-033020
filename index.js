const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  let winningObject = arr.find(function(obj){return obj.result === "W"})
  if (winningObject === undefined){
    return winningObject
  } else {
    return winningObject.year
  }
} 



 

// Write a function called `superbowlWin()` in `index.js` that:
//  * Receives 1 argument, an `Array` of JavaScript `Object`s
//  * Each object has two properties: `year` and `result`
//  * Use `find()` to test each `Object` to see if the `result` is `"W"` &mdash; a
//    win!
//  * `superbowlWin()` should return the `year` when the win occurred (if it
//    occurred at all!). If no win is found, it should return, sadly, `undefined`

// Run the tests using `learn`.


// let roommates = ["jess", "winston", "winston", "nick"];

// roommates.find( function(s) { return s === "winston" })
// //=> winston

// roommates.filter(function(s) { return s === "winston" })