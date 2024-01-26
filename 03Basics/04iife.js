//Immediately Invoked Function Expression(IIFE)
(function coffee() {
  console.log("DB-CONNECTED");
})();  //named iife

((name)=> {
  console.log(`DB-CONNECTED TWO ${name}`);
})("arjun");
