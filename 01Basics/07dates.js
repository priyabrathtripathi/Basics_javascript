// let mydate =new Date()
// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// const mycreateddate=new Date(0,23,5)
// console.log(mycreateddate.toLocaleString())

//  let myTimeStamp=Date.now()
//  console.log(myTimeStamp)
//  console.log(mycreateddate.getTime())
//  console.log(Math.floor(Date.now()/1000))

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())
console.log(newdate.getFullYear())

newdate.toLocaleString('default',{
    weekday:"long",
    month:"2-digit",
})
console.log(newdate)