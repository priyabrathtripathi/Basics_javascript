// const temperature =39
// if(temperature <= 50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")

// }
// console.log("Executed")

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User power:${power}`);
}
// scope of var is completly globle so we dont use them

const balance = 1000;
// if(balance>500) console.log("test") implicit return of scope

// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("greater than or equal to 1000")
// }
//*****************************************************switch statement************************************************ */

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("Default")
    break;
}
