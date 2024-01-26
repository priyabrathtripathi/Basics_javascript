console.log(null>0)
console.log(null==0)
console.log(null>=0)
// reason is that an equality check == and comparisons > < >=
// <= work differently
// comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true

