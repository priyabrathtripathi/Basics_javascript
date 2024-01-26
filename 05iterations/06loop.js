const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const newNums=myNumber.map((nums)=>{return nums+10})

// chaining-> method where we can use different method in sequence

const newNums = myNumber.map((num) => num * 10).map((num) => num + 1);
// console.log(newNums);


// *********************************Reduce*********************************************************** */
const myNums = [1, 2, 3];
//  const myTotal =myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//  },0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

//practical implementation of reduce in e-commerce cart
const shoppingcart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "Mern course",
    price: 6999,
  },
  {
    itemName: "python",
    price: 4000,
  },
  {
    itemName: "full stack ",
    price: 12999,
  },
  {
    itemName: "complete data structure",
    price: 2999,
  },
];
const totalPrice = shoppingcart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice)
