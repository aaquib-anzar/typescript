function createUser({name, isPaid}:{name:string, isPaid:boolean}):void{

}

createUser({name:"Aaquib", isPaid:true})

function createCourse():{name:string, price:number}{
    return {name:"Aaquib", price:399}
}

interface User {
    name:string,
    email:string,
    isActive:boolean
}

function create(user:User):User{
    return {name:"Aaquib", email:"aaquib.anzar17@gmail.com", isActive:true}
}

create({name:"", email:"", isActive:true})

type newUser = {
    readonly _id : string,//we are not able to change the value of this id as we have described it as readonly.
    name :string,
    email:string,
    isActive:boolean
    creditCard?: number//this is optional means if you dont add this then it doesn't throw any error.
}

type cardNumber = {
    cardNumber: number
}
type cardDate = {
    cardDate:string
}
//this & operator is used to combine two or more type definition to create a new type
type cardDetails = cardDate & cardNumber &{
    cvv: number
}

let newObj:newUser = {
    _id : "1234",
    name :"aaquib",
    email:"aaquib.anzar17@gmail.com",
    isActive:true   
}
//newObj._id = "1235" not allowed
newObj.name="Aaquib" //this is allowed 



export {}