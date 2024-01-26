let myHeros = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",
  getspiderpower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};
Object.prototype.arjun = function () {
  console.log(`arjun is present in all object`);
};
Array.prototype.heyarjun = function () {
  console.log(`Arjun says hello`);
};
// heropower.arjun()
myHeros.arjun();
myHeros.heyarjun();
// heropower.heyarjun()

//inheritance
const User = {
  name: "coffee",
  email: "ajax@google.com",
};
const Teacher = {
  makevideo: true,
};
const Teachingsupport = {
  isavailable: false,
};
const Tasupport = {
  makeassignment: "Js assignment",
  fulltime: true,
  _proto_: Teachingsupport,
};
Teacher._proto_ = User;

//modern syntax
Object.setPrototypeOf(Teachingsupport, Teacher);

let anotherusername = "coffeencode     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is :${this.trim().length}`);
};
anotherusername.trueLength();
"arjun".trueLength()
"yashu".trueLength()
