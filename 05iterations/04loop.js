// for each loops 
const coding =["js","ruby","java","python","cpp"]
coding.forEach(function (item) {
    // console.log(item) basic callback function
})

// coding.forEach((val)=>{
//     // console.log(val) callback arrow function
// })

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})
const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"cplusplus",
        languageFileName:"c++"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
myCoding.forEach((item)=>{//it help to access the data form data base in real life practical coding 
  console.log(item.languageName)// we can access onject in array using for each loop
})


