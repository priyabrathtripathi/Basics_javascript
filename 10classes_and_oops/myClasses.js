// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     eccryptpassword(){
//         return `${this.password} arjun`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const coffee=new User("coffee","arjun2Gmailc.om","1234")
// console.log(coffee.eccryptpassword())
// console.log(coffee.changeusername())

//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptpassword=function(){
    return `${this.password}`
}
User.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new User("tea","arjun2Gmailc.om","1234")
console.log(tea.encryptpassword())
console.log(tea.changeusername())

