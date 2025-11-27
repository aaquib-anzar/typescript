//console.log("typescript is here")
//console.log("typescript is amazing")

/*class User
{
    email:string
    name:string
    city:string = "Jaipur"

    constructor(name:string, email:string){
        this.email = email
        this.name = name
    }
}*/


class User{
    readonly city: string = "Jaipur"
    //private _coursecount:number = 1
    protected _coursecount:number = 1
    
    constructor(public email:string, public name:string){}

    get getAppleEmail():string{
        return `apple ${this.email}`
    }
    get courseCount():string{
        return `Your courseCount is ${this._coursecount}`
    }

    set courseCount(coursenum:number){
        this._coursecount = coursenum
    }
}
class SubUser extends User{
    isFamily:boolean = true
    changeCourseCount(){
        this._coursecount = 4
    
    }
}

//both the above classes are the same
//getter has the return type and setter doen't have any return type.
//3 types of access modifier are their public(can be accessed anywhere within or outside the class), private(cannot be accessed outside the class) and protected(can be accessed outside the class but only in the inherited class).
const aaquib = new User("a@a.com", "aaquib")
const subaaquib = new SubUser("a@a.com", "aaquib")
console.log(subaaquib.isFamily)
aaquib.courseCount = 17