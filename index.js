const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let resulta = record.find( obj  => obj.result === "W")
  if (!resulta) {
    return undefined
  } else {
    return resulta.year
  }
}
