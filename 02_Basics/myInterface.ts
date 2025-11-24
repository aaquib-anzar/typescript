interface User{
    readonly dbId: number,
    email:string,
    userId:number,
    googleId?: string,
    //startTrial: () => string It is method that returns a string
    startTrial(): string, // an alternate to declare the method that returns a string
    getCoupon(couponname:string):number
}

//this is known as reopening of the token
interface User{
    githubToken:string
}

//extending an interface
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const aaquib:User = {dbId:123, email:"a@a.com", userId:1701, startTrial:() => {return "Trial started"}, getCoupon:(name:"aaquib20") => {return 10}, githubToken:""}

const aaquibnew:Admin = {dbId:123, email:"a@a.com", userId:1701, startTrial:() => {return "Trial started"}, getCoupon:(name:"aaquib20") => {return 10},role:"admin", githubToken:""}

export {}

/*Interface vs Type
    1. Extending an interface   

        interface User{                      type User = {    
            githubToken:string                  githubToken:string
        }                                    }

        interface Admin extends User {       type Admin = User & {
            role: "admin" | "ta" | "learner"      role: "admin" | "ta" | "learner"
        }                                     }

    2. Reopening an interface and it is not allowed with the type
        interface User{
            readonly dbId: number,
            email:string,
            userId:number,
            googleId?: string,
            startTrial(): string, // an alternate to declare the method that returns a string
            getCoupon(couponname:string):number
        }

        interface User{
            githubToken:string
        }
*/