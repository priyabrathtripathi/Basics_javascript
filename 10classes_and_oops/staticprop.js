class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const arjun=new User("arjun")
// console.log(arjun.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email
    }
}
const android=new Teacher("android","android@gmail.com")
// android.logMe()
console.log(android.createId())