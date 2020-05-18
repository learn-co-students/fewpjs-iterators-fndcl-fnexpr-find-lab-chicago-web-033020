const testVar = {}

function testFunc() {
  return "hi"
}

// superbowlWin = (array) => {
//   array.find(function(array){
//     if (array.result === "W"){
//       return array.year
//     } else {
//       return undefined
//     }    
// })
// }

// const findWin = (array) => array.result === "W"

superbowlWin = (array) => {
 let result = array.find( (array) => array.result === "W") 
    if (result === undefined ){
      return undefined
    } else {
      return result.year
    }    
}
