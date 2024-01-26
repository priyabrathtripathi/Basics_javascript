const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)
//yes we can change the value of pi in javascript if its values are writable,enumerable,configurable
const coffee={
    name:"lattee",
    price:350,
    isAvailable:true,
    ordercoffee:function(){
 console.log("Coffee is not prepared")
    }
}
console.log(Object.getOwnPropertyDescriptor(coffee,"name"))

// Object.defineProperty(coffee,"name",{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(coffee,"name"))


for(const [key,value] of Object.entries(coffee)){
    if(typeof value !=="function"){
        console.log(`${key}:${value}`)
    }
}
