"use strict";
//console.log("typescript is here")
//console.log("typescript is amazing")
Object.defineProperty(exports, "__esModule", { value: true });
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
class User {
    email;
    name;
    city = "Jaipur";
    _coursecount = 1;
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    set courseCount(coursenum) {
        this._coursecount = coursenum;
    }
}
//both the above classes are the same
//getter has the return type and setter doen't have any return type.
const hitesh = new User("a@a.com", "aaquib");
//# sourceMappingURL=index.js.map