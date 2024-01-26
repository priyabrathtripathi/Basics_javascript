"use strict" //treat all JS code as newer version 

let name="Arjun"
let age=23
let isLoggedin=false                                         

console.log(name,age,isLoggedin)
// number
// BigInt
// string=>""
// Boolean=>true/false
// null=>standalon
// undefined
// symbol=>unique
//object

//**************************primarly data types are classified into two types primitive and non - primitive ***************88*/
// these are classified how they are stored in memory and and can be extracted from it
//Primitive =>(call by value)  String, Number ,Boolean ,null , undefined, Symbol ,BigInt   

//Non-primitive=>(call by reference) Array ,Objects , Function s

const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId)

const heros =["Hanuman","Doga","Jai shree ram"]
// console.log(typeof(heros))

// let myObj={
//     name:"arjun",
//     age:22,
//     country:"india"
// }
// console.log(typeof(myObj))

const myFunction=function(){
    console.log("Hello World")
}
console.log(typeof myFunction)

/******************************************************************************** */
//Stack (Primitive) ,Heap (Non-primitive)

let userone={
    email:"arjun1220@gmail.com",
    upi:"arjun@paytm",
}

let usertwo=userone
// console.log(usertwo)
usertwo.email ="hanu@gmail.com"
console.log(userone.email)
console.log(usertwo.email)


