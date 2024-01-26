function addtwonumbers(number1,number2){
    // console.log(number1+number2)
}
// addtwonumbers(3,4)
// const result =addtwonumbers(3,5)
// console.log(result)

function addtwonumbers(number1,number2){
    let result=number1+number2
    return result
}// when we return value then we can store in some variable
// const result =addtwonumbers(3,5)
// console.log(result)

function loginuser(username="default user") {
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("arjun"))
///****************************************************************************************************************** */
// ... =>rest operator,spread operator depends on use case
function calculateCartPrice(val,...num1){//here it is rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user ={
    username:"arjun",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username:"sam altman-tshirt",
    price:499
})


