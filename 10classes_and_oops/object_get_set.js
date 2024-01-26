const User={
    _email:"cofffe@gamilc.om",
    _password:"1234",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const coffee=Object.create(User)
console.log(coffee.email)