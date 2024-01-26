// singleton
const regularuser = {
  fullname: {
    userfullname: {
      firstname: "Arjun",
      lastname: "Tiwari",
    },
  },
};
console.log(regularuser.fullname.userfullname.lastname);

//Object.array()
// const source ={a:1,b:2}
// const target ={c:3,d:4}

// const outcome=Object.assign({},source,target)
// console.log(outcome)

//we can use spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj4 = { e: 5, f: 6 };

const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3)

console.log(Object.keys(regularuser.fullname.userfullname));
console.log(Object.values(regularuser.fullname.userfullname));

/* ****************************************************************************************************** */
const course = {
  coursename: "coffee & js",
  price: "999",
  courseInstructor: "hitesh",
};
//course.courseInstructor
// object destructuring
const {courseInstructor:Instructor} = course;
console.log(Instructor)

//JSON format
// {
//     "name":"arjun",
//     "coursename":"js in hindi",
//     "price":"free",
// }
