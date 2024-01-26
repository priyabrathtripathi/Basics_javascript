class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
    get email(){
        // return this._email.toUpperCase()
        return `${this._email}arjun`
    }
    set email(value){
        this._email=value.toUpperCase()
    }
}
const arjun =new User("arjun.ai","1234")
console.log(arjun.email)
console.log(arjun.password)