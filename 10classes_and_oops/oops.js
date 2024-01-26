const user ={
    username:'Arjun',
    logincount:8,
    signedIn:true,

    getuserdetails: function(){
        // console.log("I have got user details form database")
        // console.log(`Username:${this.username}`)
        // console.log(this)

    }
}
// console.log(user.username)
// console.log(user.getuserdetails())

//constructor function
function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=()=>{
        console.log(`Welcome ${this.username}`)
    }
    // return this
}
const userone= new User ("arjun",12,true)
const usertwo= new User ("yashu",15,true)
console.log(userone)
// console.log(usertwo)
