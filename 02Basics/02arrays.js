const marvalheros=["ironman","spiderman","thor"]
const dcheros=["superman","flash","batman"]
marvalheros.push(dcheros)

// console.log(marvalheros)
// console.log(marvalheros[3])

// const allheros =marvalheros.concat(dcheros)
// console.log(allheros)
 const allnewheros =[...marvalheros,...dcheros]
 console.log(allnewheros)

 const another_array=[1,2,3,[4,5,[6,7]],[8,9],10]
 const real_another_array=another_array.flat(Infinity)
 console.log(real_another_array)