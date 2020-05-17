const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const object = arr.find(obj => obj.result === "W" )
  return object ? object.year : undefined;
};
