const lengthEleven = (str) => {
  if (str.length === 11) {
    return true
  } else {
    return false
  }
}


const sortNumbers = (arr) => {
  let numbers = arr.filter(lengthEleven)
  return numbers
}

console.log(sortNumbers(['11111111111', 'err']))