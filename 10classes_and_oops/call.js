function setusername(username){
    this.username=username
}
function createuser(username,email,password){
    setusername.call(this,username)

    this.email=email
    this.password=password
}
const coffee=new createuser("coffee","arjun2Gmail.com","1234")
console.log(coffee)