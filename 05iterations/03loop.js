//for in loop on Onjects
const myObj ={
        "game1":"GTA",
        "game2":"Counterstrike",
        "game3":"Tekkan",
        "game4":"NFS",
    }
    for(const key  in myObj){
        console.log(`${key} is ${myObj[key]}`)
    }

    const programming=["js","rb","py","java","c++"]
    for(const i in programming){
        console.log(programming[i])
    }