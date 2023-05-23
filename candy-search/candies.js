const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (str, price) => {
  str = str.toLowerCase() ;

  found = candies.filter((candy)=>{
    let name = candy.name.toLowerCase()
    // console.log(name)
    // console.log(name.includes(str));
    return name.startsWith(str)
  });
  console.log(found)
  found = found.filter((candy)=>{
    
    return price >= candy.price
  });
  console.log(found)

  return found.map((a)=> {
    return a.name;
  })


  // if  (price >=3 && str !== 'S') { 
  // return ['Mars', 'Maltesers'];
  // } else if ( str === 'S'){
  //   return [ 'Skitties', 'Skittles', 'Starburst' ]
  // }else {
  //   return ['Mars']
  // }
};

// searchCandies('S', 4)
module.exports = searchCandies;