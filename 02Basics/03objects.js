//singleton when we create object like this Object.create 

//object literals

const mysym =Symbol("key1")
const JsUser ={
    name:"Arjun",
    age:23,
    [mysym]:"mykey1",
    location:"Greater noida",
    "email":"arjun@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.name)
// console.log(JsUser["location"]) //prefered more
// console.log(JsUser["email"])
// console.log([mysym])

//if we want that no one can manupulate our object the we use freeze method for it
// Object.freeze(JsUser)
JsUser.email="hbyfc@gmail.com"
// console.log(JsUser)

//function 
JsUser.greeting =function(){
    console.log("Hello Js User")
}
JsUser.greetingtwo =function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())