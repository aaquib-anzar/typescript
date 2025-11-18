
function addTwo(num : number):number{
    return num+2
    //return "Hello" without TS there is no error in this which is a problem
}

function getUpper(name:string){
    return name.toUpperCase()

}

function signUpUser(name:string, email:string, isPaid: boolean){

}

let loginUser = (name:string, email:string, isPaid: boolean  = false) => {}

addTwo(5)
getUpper("Aaquib")
signUpUser("Aaquib", "aaquib@gmail.com", true)
loginUser("Aaquib", "aaquib@gmail.com")


/* How to handle two different return type in TS
function getValue(myval:number){
    if(myval >5){
        return true
    }
    return "200 OK"
}*/ 

//declaring types in arrow functions
const hello = (s:string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map((hero)=> {
    return  `hero is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}
export {}