const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const results = arr.find(element => element.result === "W");
  if (results)
    return results.year;
  else
    return undefined;
};