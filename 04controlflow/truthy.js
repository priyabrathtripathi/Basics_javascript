const userEmail = "arjun@gmail.com";

if (userEmail) {
  console.log("Got new user email");
} else {
  console.log("Don't have user email");
}

//falsy values

//false,0,-0,BigInt,"",null,undefined,NaN

//truthy values

//"0",'false'," ",[],{},function(){}
// if(userEmail.length===0){
//     console.log("Array is empty")
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
//*********************************************************************** */

//Nullish Coalescing Operator (??)
//some times we get null or undefined values from user so we use these operator
let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
// console.log(val1);

//Terniary opearator
// condition ? true : false
const iceteaprice =100
iceteaprice >= 80 ? console.log("less thand 100"):console.log("greater than 100")
