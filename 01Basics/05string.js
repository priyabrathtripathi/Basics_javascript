const name ="arjun"
const repocount= 5
// first method 
// console.log(name + repocount + "value")


// (String Interpolation)The $ character identifies a string literal as an interpolated string. 
// An interpolated string is a string literal that might contain interpolation expressions.
console.log(`Hello my name is ${name} and repo count is ${repocount}`)
const playername=new String("arjun")
// console.log(playername[0])
// console.log(playername.__proto__)
// console.log(playername.length)
// console.log(playername.toUpperCase())
const newstring=playername.substring(0,4)
console.log(newstring)
const anotherstring="     arjun     "
console.log(anotherstring);
console.log(anotherstring.trim())

const url="https://arjun_portfolio/techy@20boy"

console.log(url.replace('@20','-'))
