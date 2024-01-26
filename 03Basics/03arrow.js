const user = {
  username: "arjun",
  price: 999,

  welcomemessage: function () {
    console.log(`${this.username},welcome to website`);
    // console.log(this)
  },
};
// user.welcomemessage()
// user.username="abhiyamnu"
// user.welcomemessage()

// console.log(this)
// function coffee(){
//     let username="arjun"
//     console.log(this.username)
// }
// coffee()

// const coffee =function(){
//     let username="arjun"
//     console.log(this.username)
// }

// const coffee = () => {
//   let username = "arjun";
//   console.log(this.username);
// };

// coffee()

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }

// we can use implicit return if we know that we can return value in one line only
const addtwo = (num1, num2) => num1 + num2;
console.log(addtwo(3, 4));
