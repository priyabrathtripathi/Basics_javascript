for (let i = 0; i < 12; i++) {
    const element = i;
    
    if(element==7){
        // console.log("Thala for a reason")
    }
    // console.log(element)
    
}

for (let i = 1; i <= 15; i++) {
    // console.log(`Outer loop value :${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        // console.log(i+'*'+j+'='+i*j)
        
    }
    
}

// for (let index = 1; index <= 20; index++) {
//     if (index==7) {
//         console.log(`Thala for a reason`);
//         break
//     }
//     console.log(`Value of i is ${index}`)
    
// }
for (let index = 1; index <= 20; index++) {
    if (index==7) {
        // console.log(`Thala for a reason`);
        continue
    }
    // console.log(`Value of i is ${index}`)
    
}

//******************************While loop***************************************** */
let index=0
while(index<=10){
    console.log(`Value of index is ${index}`)
    index=index+2
}
//**********************************do while************************************************** */

let score=1
do{
    console.log(`score if${score}`)
    score++;
}
while(score<=10)