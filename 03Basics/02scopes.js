if (true){
    let a=10
    const b=20
    var c=30
}
var c=100
// console.log(a)
// console.log(b)
console.log(c)//it should not be accessible outside the scope
////* *********************************************** */
function one(){
    const username="Arjun"
     function two(){
        const website="youtube"
        console.log(username)
     }
    //  console.log(website)//wrong execution as it is not accessible outside the two function

     two()
}
one()

if(true){
    const username="Arjun"
    if(username==="arjun"){
        const website="youtube"
        console.log(username+website)
    }
    // console.log(website) //cannot access the website as it is out of the scope
}
// console.log(username) it cannot be accessed out of the scope

//***********************************************************interesting*********************************** */
console.log(addone(5))
 function addone(value){
    return value+1  
 }
 //variable can hold functions too
 const addtwo =function(num){
     return num+2
    }
console.log(addtwo(5))
 

