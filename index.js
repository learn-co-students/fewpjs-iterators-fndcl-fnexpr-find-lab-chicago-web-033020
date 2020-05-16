const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(function(game) {
    return game.result === "W"
  })
  if (win) {
    return win.year
  }
}

// using arrow function!!! 
// function superbowlWin(array) {
//   let win = array.find(game => game.result === "W")
//   if (win) {
//     return win.year
//   }
// }