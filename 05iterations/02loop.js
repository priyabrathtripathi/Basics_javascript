//for of 
//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]
for(const num of arr){
    // console.log(num)
}

const greeting ="Hello Worlds"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}

//Maps
const map =new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set('Fr',"France")
//  console.log(map)
// for(const key of map){
//     console.log(key)
// }
for(const [key,value] of map){//for of on map
    // console.log(key,":-",value)
}
// const myObj ={
//     "game1":"GTA",
//     "game2":"Counterstrike",
//     "game3":"Tekkan",
//     "game4":"NFS",
// }
// for(const game of myObj){
//     console.log(game)
// }/ for of is not iterable on for of loop we can use some method to iterate the object

