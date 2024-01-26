//1->Promise
const promiseone = new Promise((resolve, reject) => {
  //Do an async task Db calls,cryptography,network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseone.then(() => {
  console.log("Promise consumed");
});
//2->Promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});
//3->Promise
const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Arjun", email: "arjun1220@gmail.com" });
  }, 1000);
});

promisethree.then((user) => {
  console.log(user);
});
//4->Promise
const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "arjun", password: "123" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("The promise is either resolved or rejected")
  })
  //5->Promise
  const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(!error){
            resolve({username:'javascript',password:'123'})
        }else{
            reject('Error:Js went wrong')
        }
    },1000)
  })
  promisefive.then

  /// async and await
  async function consumepromisefive(){
    try {
        const response=await promisefive
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
  }
  consumepromisefive()

//   async function getallusers(){
//     try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
        
//     }
//   }
// getallusers()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))


