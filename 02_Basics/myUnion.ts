let score:number|string = 33
score = 44
score = "55"

type User1 = {
    name:string,
    id:number
}


type Admin = {
    username:string,
    id:number
}

let aaquib : User1|Admin = {name:"Aaquib", id:334}

aaquib = {username:"Aa", id:334}

function getDBid(id:number|string){
    console.log(`DB id is ${id}`)
}
getDBid(30)
getDBid("30")

function getDBID(id:number|string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    
}
const data1:number[] = [1, 2, 3
    
]
const data2:string[] = ["1", "2", "3"]
const data3:(string|number|boolean)[] = ["1",2,true]

let seatallotment : "aisle"|"middle"|"window"

seatallotment = "window"
//seatallotment = "crew" not possible as it is not defined in the type
