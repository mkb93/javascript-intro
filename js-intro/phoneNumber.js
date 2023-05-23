// const numbers = ['101010', '12321322','aaaaaaaaaaaaaaaaaaaa'];

// const filterLongNumbers = (list) => {
//   list = list.filter((number)=>{
//     return number.length < 7;
//   })
//   return list 
// }
// console.log(filterLongNumbers(numbers))

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];



// An array of objects!
const names = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateNames = () => {
  arr = names.map((name) => {
    return `Hi ${name.name}! ${name.discount}% off our best candies for you today!`
  })
  return arr
}
console.log(generateNames(names))